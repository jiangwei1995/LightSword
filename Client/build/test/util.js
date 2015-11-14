'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var assert = require('assert');
var util = require('../sources/socks5/util');
describe('test util', () => {
    it('lookup host ip', (done) => __awaiter(this, void 0, Promise, function* () {
        let ip = yield util.lookupHostIPAsync();
        assert(ip.length > 0);
        assert(ip.startsWith('192.168'));
        done();
    }));
    it('socks5 default response', (done) => __awaiter(this, void 0, Promise, function* () {
        let buf = yield util.buildDefaultSocks5ReplyAsync();
        assert(buf.length > 0);
        assert(buf[0] === 0x05);
        done();
    }));
});