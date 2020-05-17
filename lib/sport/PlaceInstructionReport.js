"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
const PlaceInstruction_1 = require("../sport/PlaceInstruction");
class PlaceInstructionReport extends JsonMember_1.default {
    constructor(options) {
        super();
        this.status = this.fromJson(options.status, InstructionReportStatus_1.default);
        if (options.errorCode) {
            this.errorCode = this.fromJson(options.errorCode, InstructionReportErrorCode_1.default);
        }
        if (options.orderStatus) {
            this.orderStatus = this.fromJson(options.orderStatus, OrderStatus_1.default);
        }
        this.instruction = this.fromJson(options.instruction, PlaceInstruction_1.default);
        this.betId = options.betId;
        if (options.placedDate) {
            this.placedDate = this.fromJson(options.placedDate, Date);
        }
        this.averagePriceMatched = options.averagePriceMatched;
        this.sizeMatched = options.sizeMatched;
    }
    toJson() {
        const json = {
            status: this.status.getValue(),
            instruction: this.instruction.toJson(),
        };
        if (this.errorCode) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.orderStatus) {
            json.orderStatus = this.orderStatus.getValue();
        }
        if (typeof this.betId !== 'undefined') {
            json.betId = this.betId;
        }
        if (typeof this.placedDate !== 'undefined') {
            json.placedDate = this.placedDate.toISOString();
        }
        if (typeof this.averagePriceMatched !== 'undefined') {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (typeof this.sizeMatched !== 'undefined') {
            json.sizeMatched = this.sizeMatched;
        }
        return json;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getErrorCode() {
        return this.errorCode;
    }
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
    }
    getOrderStatus() {
        return this.orderStatus;
    }
    setOrderStatus(orderStatus) {
        this.orderStatus = orderStatus;
    }
    getInstruction() {
        return this.instruction;
    }
    setInstruction(instruction) {
        this.instruction = instruction;
    }
    getBetId() {
        return this.betId;
    }
    setBetId(betId) {
        this.betId = betId;
    }
    getPlacedDate() {
        return this.placedDate;
    }
    setPlacedDate(placedDate) {
        this.placedDate = placedDate;
    }
    getAveragePriceMatched() {
        return this.averagePriceMatched;
    }
    setAveragePriceMatched(averagePriceMatched) {
        this.averagePriceMatched = averagePriceMatched;
    }
    getSizeMatched() {
        return this.sizeMatched;
    }
    setSizeMatched(sizeMatched) {
        this.sizeMatched = sizeMatched;
    }
}
exports.default = PlaceInstructionReport;
//# sourceMappingURL=PlaceInstructionReport.js.map