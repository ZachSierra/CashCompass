class ClientError extends Error {
    constructor(message) {
        super(message);
        this.name = "ClientError";
    }
}

class ServiceError extends Error {
    constructor(message) {
        super(message);
        this.name = "ServiceError";
    }
}

class HandlerError extends Error {
    constructor(message) {
        super(message);
        this.name = "HandlerError";
    }
}

module.exports = { ClientError, ServiceError, HandlerError };