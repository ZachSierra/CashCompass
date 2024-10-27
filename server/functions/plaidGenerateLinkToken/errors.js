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

module.exports = { ClientError, ServiceError };