// not used now

export default {
    get: jest.fn(() => Promise.resolve(null)),
    all: jest.fn(() => Promise.resolve([])),
    defaults: {
        headers: {}
    },
    CancelToken: function() {
        return {};
    },
    interceptors: {
        response: {
            use: () => {}
        }
    }
};
