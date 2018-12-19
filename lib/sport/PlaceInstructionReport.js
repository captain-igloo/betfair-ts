"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
const JsonMember_1 = require("../JsonMember");
const InstructionReportErrorCode_1 = require("../sport/enum/InstructionReportErrorCode");
const InstructionReportStatus_1 = require("../sport/enum/InstructionReportStatus");
const OrderStatus_1 = require("../sport/enum/OrderStatus");
const PlaceInstruction_1 = require("../sport/PlaceInstruction");
class PlaceInstructionReport extends JsonMember_1.default {
    constructor(status = new InstructionReportStatus_1.default(), errorCode = new InstructionReportErrorCode_1.default(), orderStatus = new OrderStatus_1.default(), instruction = new PlaceInstruction_1.default(), betId = '', placedDate = null, averagePriceMatched = null, sizeMatched = null) {
        super();
        this.status = status;
        this.errorCode = errorCode;
        this.orderStatus = orderStatus;
        this.instruction = instruction;
        this.betId = betId;
        this.placedDate = placedDate;
        this.averagePriceMatched = averagePriceMatched;
        this.sizeMatched = sizeMatched;
    }
    fromJson(json) {
        if ('status' in json) {
            this.status.setValue(json.status);
        }
        if ('errorCode' in json) {
            this.errorCode.setValue(json.errorCode);
        }
        if ('orderStatus' in json) {
            this.orderStatus.setValue(json.orderStatus);
        }
        if ('instruction' in json) {
            this.instruction.fromJson(json.instruction);
        }
        if ('betId' in json) {
            this.betId = json.betId;
        }
        if ('placedDate' in json) {
            this.placedDate = new Date(json.placedDate);
        }
        if ('averagePriceMatched' in json) {
            this.averagePriceMatched = json.averagePriceMatched;
        }
        if ('sizeMatched' in json) {
            this.sizeMatched = json.sizeMatched;
        }
    }
    toJson() {
        const json = {};
        if (this.status.isValid()) {
            json.status = this.status;
        }
        if (this.errorCode.isValid()) {
            json.errorCode = this.errorCode;
        }
        if (this.orderStatus.isValid()) {
            json.orderStatus = this.orderStatus;
        }
        if (this.instruction.isValid()) {
            json.instruction = this.instruction.toJson();
        }
        if (this.betId !== null) {
            json.betId = this.betId;
        }
        if (this.placedDate !== null) {
            json.placedDate = this.placedDate.toISOString();
        }
        if (this.averagePriceMatched !== null) {
            json.averagePriceMatched = this.averagePriceMatched;
        }
        if (this.sizeMatched !== null) {
            json.sizeMatched = this.sizeMatched;
        }
        return json;
    }
    isValid() {
        return this.status.isValid() &&
            this.instruction.isValid();
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
