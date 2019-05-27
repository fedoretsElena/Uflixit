import mockAxios from "axios";

import mocksData from "../mocks";
import MediaService from "./mediaService";
import { MediaType } from "../../models/MediaFactory";
import BaseMedia, { IBaseMedia } from "../../models/BaseMedia";

describe("mediaService", () => {
    let mediaService: MediaService;

    beforeEach(() => {
        mediaService = new MediaService();
        mediaService.VISIBLE_ITEMS = 2;
    });

    describe("getDetail method", () => {
        let location: { pathname?: string } = {};
        const mockResponse = {
            id: "1",
            title: "Game of Thrones",
            director: "Alan Taylor",
            creators: ["Alan Taylor", "David Benioff", "Ramin Djawadi"]
        };

        beforeEach(() => {
            mockAxios.get.mockImplementationOnce(() =>
                Promise.resolve(mockResponse)
            );
        });

        it("should return TV show object", async () => {
            location["pathname"] = "https://uflixit/tv-shows/1";
            const res = await mediaService.getDetail("1", location);

            expect(res).toHaveProperty("creators");
        });

        it("should return Movie object", async () => {
            location["pathname"] = "https://uflixit/movies/1";
            const res = await mediaService.getDetail("1", location);

            expect(res).toHaveProperty("director");
        });
    });

    describe("getReviews method", () => {
        it("should return mock reviews", async () => {
            mockAxios.get.mockImplementation(() => {
                return Promise.resolve({ critic_reviews: mocksData.reviews });
            });

            const reviews = await mediaService.getReviews("Game of Thrones", {
                pathname: "https://uflixit/tv-shows/"
            });

            expect(reviews).toHaveLength(8);
            expect(reviews[0].author).toEqual("Tim Grierson");
        });
    });

    describe("getWantedMoviesIds method", () => {
        it("should return list of wanted movies", async () => {
            const mockId = "1";

            mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockId));
            mediaService.getPosters = jest.fn((mockIds, type) =>
                Promise.resolve([new BaseMedia(mockIds[0], type)])
            );

            const res = await mediaService.getWantedMoviesIds();

            expect(res[0].id).toEqual("1");
            expect(res).toHaveLength(1);
        });
    });

    describe("getPosters method", () => {
        const media: IBaseMedia[] = [{ id: "1" }, { id: "2" }];
        const mockResponse: string[] = [
            "https://pixel/image1.png",
            "https://pixel/image2.png"
        ];

        beforeEach(() => {
            mockAxios.all.mockImplementationOnce(() =>
                Promise.resolve(mockResponse)
            );
            mockAxios.get.mockImplementationOnce(() =>
                Promise.resolve(mockResponse[0])
            );
        });

        it("should return arr of base media info", async () => {
            const updatedMedia = await mediaService.getPosters(
                media,
                MediaType.Movie
            );

            expect(updatedMedia[0].image).toEqual(mockResponse[0]);
        });

        it("getPoster should be called", async () => {
            const spy = jest.spyOn(mediaService, "getPoster");
            await mediaService.getPosters(media, MediaType.Movie);

            expect(spy).toHaveBeenCalled();
        });
    });

    describe("getPoster method", () => {
        let media: BaseMedia;

        beforeEach(() => {
            media = new BaseMedia({ id: "1" });
        });

        it("should return default poster of media if request fail", async () => {
            mockAxios.get.mockImplementationOnce(() => Promise.reject("err"));
            const res = await mediaService.getPoster(media, MediaType.Movie);

            expect(res).toEqual(media.image);
        });

        it("should return correct poster of media", async () => {
            mockAxios.get.mockResolvedValue("https://example.png");
            let res = await mediaService.getPoster(
                new BaseMedia({ id: "tt0133093" }),
                MediaType.Movie
            );

            expect(res).not.toBe(media.image);
        });
    });

    describe("extractDataFromStorage method", () => {
        const mediaFromStorage: IBaseMedia[] = [];

        beforeEach(() => {
            mediaFromStorage.length = 0;

            for (let i = 0; i < 10; i++) {
                mediaFromStorage.push({
                    id: i.toString()
                });
            }
        });

        it("mediaFromStorage content should increase", () => {
            mediaService.extractDataFromStorage(mediaFromStorage, [
                { id: "2" }
            ]);
            expect(mediaFromStorage).toHaveLength(11);
        });

        it("should return content of second page", () => {
            expect(
                mediaService.extractDataFromStorage(mediaFromStorage, [], 2)
            ).toEqual(expect.arrayContaining([{ id: "2" }, { id: "3" }]));
        });

        it("should return content of second page, when count of visible items changed", () => {
            mediaService.VISIBLE_ITEMS = 3;

            expect(
                mediaService.extractDataFromStorage(mediaFromStorage, [], 2)
            ).toEqual(
                expect.arrayContaining([{ id: "3" }, { id: "4" }, { id: "5" }])
            );
        });
    });

    describe("prepareApiPath method", () => {
        const inputStr: string = "https://api/{type}/{id}";

        it("should replace {id} and {type} for input value", () => {
            expect(
                mediaService.prepareApiPath(inputStr, "1", "tv-show")
            ).toEqual("https://api/tv-show/1");
        });
    });

    describe("prepareSearchRes method", () => {
        let mockBaseMedia: IBaseMedia;

        beforeEach(() => {
            mockBaseMedia = { id: "1" };
        });

        it("should return arr, even if input string", () => {
            expect(mediaService.prepareSearchRes(mockBaseMedia)).toHaveLength(
                1
            );
        });

        it("always should return arr, when input arr", () => {
            expect(mediaService.prepareSearchRes([mockBaseMedia])).toHaveLength(
                1
            );
        });

        it("should have image property after create instance of BaseMedia", () => {
            expect(
                mediaService.prepareSearchRes(mockBaseMedia)[0]
            ).toHaveProperty("image");
        });
    });

    describe("convertToArrWithKeyId method", () => {
        let inputIds = ["1", "2"];

        it("should return arr", () => {
            expect(mediaService.convertToArrWithKeyId(inputIds)[0].id).toEqual(
                inputIds[0]
            );
        });

        it("should return the count length as input elements", () => {
            expect(mediaService.convertToArrWithKeyId(inputIds).length).toEqual(
                inputIds.length
            );
        });
    });
});
