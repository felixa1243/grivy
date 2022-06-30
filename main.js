/*
* Created By @Masbimmmm
* I do not forbid you to change my name, but please don't remove the tag Powered
* This is next Generation From I-WRAH Tools
* Created on : 19/06/2022
*   ______         ____  _____  ______   _______          _
* .' ____ \       |_   \|_   _||_   _ `.|_   __ \        / \
* | (___ \_| ______ |   \ | |    | | `. \ | |__) |      / _ \
*  _.____`..|______|| |\ \| |    | |  | | |  __ /      / ___ \
* | \____) |       _| |_\   |_  _| |_.' /_| |  \ \_  _/ /   \ \_
*  \______.'      |_____|\____||______.'|____| |___||____| |____|
*
*                    BOT GRIVY WITH NODEJS
*                      Tools By S-NDRA
*
*  Powered By :
*  I-WRAH & EriKz & X-ReRe & T-PhuTe & Elkiranaa & M.ZulfA
*
*  How to use : 
*  [-] Install nodejs, 
*  [-] installl package "puppeteer", "puppeteer-extra", "puppeteer-extra-plugin-stealth" with npm, 
*  [-] set account "user|password" with array userlist, ex you can see in line,
*  [-] run
*/

import * as fs from 'fs';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

var userlist = [
"user1|pass",
"user2|pass",
"user3|pass",
"user4|pass ... anymore",
];

function _0x356a() {
    var _0x518ef5 = ['waitForNavigation', '//*[contains(text(),\x27Accept\x20all\x27)]', '26KASrJt', '81851pdPwEZ', '26cJDNZA', '//span[contains(text(),\x27Claim\x20it\x27)]', 'input[id=\x22email\x22]', '.barcode-value', '//span[contains(text(),\x27Facebook\x27)]', 'evaluate', '102SPTbMm', 'Waiting\x20cookie\x20accept', '[GAGAL]\x20', '//span[contains(text(),\x27Barcode\x27)]', '//span[contains(text(),\x27Redeem\x27)]', 'waitForSelector', 'textContent', 'networkidle2', '\x20cek\x20ae\x20ndiri\x20lah,\x20mungkin\x20dah\x20pernah\x20login\x20/\x20claim,\x20ini\x20code\x20buat\x20akun\x20yang\x20belom\x20pernah\x20claim\x20aja', 'length', 'goto', 'Click\x20Klaim', '.terms-block', 'waitForXPath', 'log', '11UDGrrI', '//span[contains(text(),\x27Lanjutkan\x27)]', '8gPWgkI', 'type', 'split', 'once', '40574QyvsTW', '//span[contains(text(),\x27Allow\x27)]', 'Preparing\x20browser', 'click', 'kok\x20ngga\x20ke\x20klik', '5676610zVQUZL', 'accept\x20login\x20Facebook', 'Ready\x20page', '2530220lBQWVE', '\x20cek\x20ajalah\x20vouchernya\x20', 'use', './voucher/', 'failed\x20close\x20page', 'Click\x20Redeem', 'close', 'Click\x20Tap\x20to\x20expand', 'input[id=\x22pass\x22]', 'geolocation', 'udah\x20pernah\x20login\x20keknya', 'Click\x20Allow', 'setExtraHTTPHeaders', '1513518gsqbgk', '1127088DJIVrB', '//input[@name=\x27login\x27]', 'udah\x20ke\x20klik', '1903404KorRmI', 'Click\x20Claim\x20it', '4KfZhsc', 'getCurrentPosition', 'popup', 'Failed\x20load\x20Page', 'Click\x20verif', 'screenshot', '//p[contains(text(),\x27Tap\x20to\x20expand\x27)]', '//span[@class=\x22checkmark\x22][1]', 'Login\x20akun\x20', 'https://ayo.coca-cola.co.id/login/sat-coke-ayo-9-60?utm_campaign=Earned_Media&utm_content=Wallet&utm_medium=Advocacy&utm_source=ayo_coca_cola&utm_term=Sharing'];
    _0x356a = function() {
        return _0x518ef5;
    };
    return _0x356a();
}

function _0x37ae(_0x375508, _0x5f19c1) {
    var _0x356a9b = _0x356a();
    return _0x37ae = function(_0x37ae26, _0x4b7cc6) {
        _0x37ae26 = _0x37ae26 - 0xa3;
        var _0x8b3822 = _0x356a9b[_0x37ae26];
        return _0x8b3822;
    }, _0x37ae(_0x375508, _0x5f19c1);
}(function(_0x4163a0, _0x542e29) {
    var _0x159076 = _0x4163a0();

    function _0x174e55(_0x49f775, _0xc8bf9a) {
        return _0x37ae(_0xc8bf9a - -0x141, _0x49f775);
    }

    function _0x4923cd(_0x1f7104, _0x50dc38) {
        return _0x37ae(_0x1f7104 - '0xe0', _0x50dc38);
    }

    function _0x6f41eb(_0x22cad7, _0x2360d3) {
        return _0x37ae(_0x2360d3 - '0x1fa', _0x22cad7);
    }
    while (!![]) {
        try {
            var _0x3d64e2 = parseInt(_0x174e55(-0xab, -0x90)) / 0x1 * (-parseInt(_0x6f41eb(0x2dc, '0x2d4')) / 0x2) + parseInt(_0x174e55(-'0x8d', -0x7b)) / 0x3 * (-parseInt(_0x6f41eb(0x2e5, 0x2c6)) / 0x4) + parseInt(_0x4923cd(0x199, '0x19c')) / 0x5 + parseInt(_0x6f41eb(0x2c0, '0x2da')) / 0x6 * (-parseInt(_0x4923cd(0x1b9, 0x1c3)) / 0x7) + -parseInt(_0x4923cd('0x18d', 0x19f)) / 0x8 * (-parseInt(_0x174e55(-0x87, -'0x7a')) / 0x9) + -parseInt(_0x4923cd('0x196', '0x17c')) / 0xa * (-parseInt(_0x4923cd('0x18b', 0x174)) / 0xb) + parseInt(_0x6f41eb(0x2dc, 0x2c4)) / 0xc * (parseInt(_0x174e55(-0x8a, -0x69)) / 0xd);
            if (_0x3d64e2 === _0x542e29) break;
            else _0x159076['push'](_0x159076['shift']());
        } catch (_0x4ae7a6) {
            _0x159076['push'](_0x159076['shift']());
        }
    }
}(_0x356a, 0x45aee), ((async () => {
    function _0x4d3855(_0x468e32, _0x4f4c09) {
        return _0x37ae(_0x4f4c09 - -0x271, _0x468e32);
    }

    function _0x228a24(_0x4453b0, _0x4e9f7d) {
        return _0x37ae(_0x4e9f7d - -0x26, _0x4453b0);
    }

    function _0xf24aa1(_0x1e36a0, _0x38619c) {
        return _0x37ae(_0x1e36a0 - 0x399, _0x38619c);
    }
    for (var _0xa24bc = 0x0; _0xa24bc < userlist[_0xf24aa1('0x43e', '0x43a')]; _0xa24bc++) {
        var _0x298375 = userlist[_0xa24bc];
        let _0x343688 = _0x298375[_0x4d3855(-0x1b7, -'0x1c2')]('|'),
            _0x4b2e89 = _0x343688[0x0],
            _0x4a097c = _0x343688[0x1];
        console[_0xf24aa1('0x443', 0x444)](_0x4d3855(-0x1c1, -0x1be)), puppeteer[_0x4d3855(-'0x1d6', -'0x1b6')](StealthPlugin());
        const _0x308473 = await puppeteer['launch']({
                'headless': ![]
            }),
            _0x174700 = await _0x308473['newPage']();
        await _0x174700['setViewport']({
            'width': 0x21c,
            'height': 0x24a,
            'deviceScaleFactor': 0x1
        }), await _0x174700['evaluateOnNewDocument'](function() {
            function _0x383007(_0x3ac266, _0xdf97ae) {
                return _0xf24aa1(_0xdf97ae - -0xa2, _0x3ac266);
            }

            function _0x291e82(_0x424545, _0x18ab67) {
                return _0x228a24(_0x424545, _0x18ab67 - -'0x193');
            }
            navigator[_0x291e82(-'0xf6', -0xf7)][_0x383007('0x3df', 0x3c4)] = function(_0x3f00cf) {
                setTimeout(() => {
                    _0x3f00cf({
                        'coords': {
                            'accuracy': 0x15,
                            'altitude': null,
                            'altitudeAccuracy': null,
                            'heading': null,
                            'latitude': 23.129163,
                            'longitude': 113.264435,
                            'speed': null
                        }
                    });
                }, 0x3e8);
            };
        });
        var _0x3903e5 = ![];
        await _0x174700[_0x228a24(0x80, '0x80')](_0x228a24(0xce, '0xaf'), {
            'waitUntil': _0x228a24(0x8d, 0x7d)
        });
        const _0x4630b6 = _0x174700['waitForNavigation']();
        while (!![]) {
            try {
                await _0x174700[_0xf24aa1('0x47e', 0x476)]('.confirm-item'), console[_0xf24aa1('0x443', '0x464')](_0xf24aa1('0x451', 0x44f)), await v0x4a7cc3(0xc8);
                break;
            } catch (_0x314e2a) {
                console[_0x4d3855(-'0x1d0', -0x1c7)](_0x228a24(0x8e, '0xa9'));
            }
        }
        await v0x4a7cc3(0x7d0), await _0x174700[_0x228a24('0x71', 0x83)](_0x228a24('0xb3', '0xb1'));
        while (!![]) {
            let _0x364da1 = await _0x174700['$x'](_0x4d3855(-0x1bc, -0x19a));
            if (_0x364da1) {
                _0x364da1[0x0][_0xf24aa1('0x44d', 0x452)]();
                break;
            } else console[_0x4d3855(-0x1d5, -0x1c7)](_0x228a24(0xb2, 0xbb));
        }
        console['log'](_0xf24aa1(0x46d, 0x45b) + _0x298375);
        while (!![]) {
            let _0x7c1308 = await _0x174700['$x'](_0x228a24(0xbf, 0xb8));
            if (_0x7c1308) {
                const _0x1b25bd = new Promise(_0x1b1ca7 => _0x174700[_0xf24aa1(0x449, '0x466')]('popup', _0x1b1ca7));
                _0x7c1308[0x0][_0x4d3855(-0x1ca, -'0x1bd')]();
                const _0x22a196 = await _0x1b25bd;
                await _0x22a196[_0x4d3855(-0x1a7, -'0x1ac')]({
                    'accept-language': 'en-US,en;q=0.9,hy;q=0.8'
                });
                try {
                    const _0x25ac65 = _0x22a196[_0x4d3855(-0x199, -0x19b)]();
                    await _0x22a196[_0xf24aa1('0x47e', 0x483)](_0xf24aa1('0x475', '0x482')), await _0x22a196[_0x4d3855(-'0x1ba', -'0x1c3')](_0x4d3855(-'0x1ac', -0x195), _0x4b2e89), await _0x22a196[_0x228a24('0xb0', '0xbf')](_0x228a24(0x91, '0x9b')), await _0x22a196[_0x228a24(0x87, '0x88')]('input[id=\x22pass\x22]', _0x4a097c), await _0x22a196['waitForXPath']('//input[@name=\x27login\x27]');
                    let _0x2b746c = await _0x22a196['$x'](_0x228a24('0xae', '0xa2'));
                    if (_0x2b746c) {
                        _0x2b746c[0x0][_0x228a24(0x71, 0x8e)](), await _0x25ac65;
                        try {
                            await _0x22a196[_0x228a24('0x9a', 0x83)]('//span[contains(text(),\x27Lanjutkan\x27)]');
                            let _0x2438e7 = await _0x22a196['$x'](_0x4d3855(-'0x1b6', -'0x1c5'));
                            if (_0x2438e7) {
                                console[_0x228a24('0x73', 0x84)](_0xf24aa1(0x450, '0x451')), _0x2438e7[0x0][_0xf24aa1('0x44d', 0x46f)]();
                                try {
                                    await v0x4a7cc3(0x3e8), await _0x25ac65, await _0x22a196[_0x4d3855(-'0x192', -'0x1b2')](), await v0x4a7cc3(0x1f4);
                                } catch (_0x11f15f) {
                                    console[_0x228a24('0x84', '0x84')](_0x228a24(0xa2, '0x97'));
                                }
                                break;
                            }
                        } catch (_0x329af8) {
                            console[_0x228a24('0x84', 0x84)](_0x228a24(0xbc, '0x9d')), await _0x22a196['close'](), await v0x4a7cc3(0x1f4);
                            break;
                        }
                    }
                } catch (_0x23ea97) {
                    console[_0x4d3855(-'0x1ce', -'0x1c7')](_0x23ea97);
                }
            } else console[_0x228a24('0x76', 0x84)](_0x4d3855(-'0x1c1', -'0x1bc'));
        }
        try {
            let _0x5addea = await _0x174700['$x'](_0x228a24('0x96', 0xb8));
            if (_0x5addea) {
                const _0x17d989 = new Promise(_0x35fb5a => _0x174700['once'](_0xf24aa1('0x467', '0x456'), _0x35fb5a));
                _0x5addea[0x0]['click']();
            }
            await _0x174700['waitForXPath'](_0x228a24('0xa0', 0x8c));
            var _0x3c40d1 = await _0x174700['$x']('//span[contains(text(),\x27Allow\x27)]');
            _0x3c40d1[0x0]['click'](), console[_0xf24aa1('0x443', 0x432)](_0xf24aa1('0x45d', 0x458)), await v0x4a7cc3(0x3e8), await _0x174700[_0xf24aa1(0x442, '0x42e')]('//button[contains(text(),\x27Klaim\x27)]');
            var _0x3c40d1 = await _0x174700['$x']('//button[contains(text(),\x27Klaim\x27)]');
            _0x3c40d1[0x0][_0x228a24('0xb0', '0x8e')](), console[_0x4d3855(-'0x1bb', -'0x1c7')](_0xf24aa1('0x440', 0x458)), await _0x174700[_0x4d3855(-0x1d3, -'0x1c8')]('//span[contains(text(),\x27Redeem\x27)]'), await v0x4a7cc3(0x1388);
            var _0x3c40d1 = await _0x174700['$x'](_0x228a24('0xb4', 0xbe));
            while (!![]) {
                var _0x694be = await _0x174700['$x'](_0x228a24(0x9b, 0xad));
                if (!_0x694be) await _0x174700['waitForXPath'](_0xf24aa1(0x47d, '0x488')), _0x3c40d1[0x0][_0xf24aa1('0x44d', '0x46f')](), console[_0xf24aa1('0x443', '0x446')](_0x228a24(0xa9, '0x98'));
                else {
                    var _0xcbe208 = await _0x174700['$'](_0x228a24('0x7f', '0x82'));
                    if (_0xcbe208) {
                        console['log'](_0x4d3855(-0x1b4, -'0x1a8'));
                        break;
                    } else await _0x174700[_0x4d3855(-0x1d6, -0x1c8)](_0xf24aa1('0x47d', 0x47a)), _0x3c40d1[0x0]['click'](), console[_0x4d3855(-0x1d4, -0x1c7)]('Click\x20Redeem');
                }
            }
            await v0x4a7cc3(0xbb8), await _0x174700[_0x4d3855(-'0x171', -'0x18c')](_0x228a24('0x99', 0x82));
            var _0x694be = await _0x174700['$x']('//span[@class=\x22checkmark\x22][1]');
            _0x694be[0x0][_0xf24aa1('0x44d', 0x460)](), console[_0x228a24('0x86', 0x84)](_0xf24aa1('0x469', '0x478')), await v0x4a7cc3(0xbb8), await _0x174700['waitForXPath'](_0x4d3855(-0x1a6, -'0x196'));
            var _0x3c40d1 = await _0x174700['$x']('//span[contains(text(),\x27Claim\x20it\x27)]');
            _0x3c40d1[0x0][_0x4d3855(-0x19f, -0x1bd)](), console[_0x4d3855(-'0x1bd', -0x1c7)](_0x228a24('0xbb', '0xa5')), await v0x4a7cc3(0xbb8), await _0x174700[_0x4d3855(-'0x1e0', -0x1c8)](_0x4d3855(-0x1ad, -0x19f));
            var _0x3c40d1 = await _0x174700['$x']('//p[contains(text(),\x27Tap\x20to\x20expand\x27)]');
            _0x3c40d1[0x0]['click'](), console[_0x228a24('0x6f', 0x84)](_0x228a24(0xaf, 0x9a)), await _0x174700[_0xf24aa1(0x442, '0x43d')](_0xf24aa1('0x47c', 0x486));
            var _0x3c40d1 = await _0x174700['$x'](_0xf24aa1(0x47c, 0x48c));
            _0x3c40d1[0x0]['click'](), await v0x4a7cc3(0xbb8);
            let _0x5c3144 = await _0x174700['$'](_0xf24aa1(0x476, '0x469')),
                _0x2a77c0 = await _0x174700[_0xf24aa1('0x478', 0x464)](_0x3eb602 => _0x3eb602[_0xf24aa1(0x47f, '0x47c')], _0x5c3144);
            console[_0xf24aa1(0x443, '0x44f')]('[Sukses]\x20' + _0x298375 + _0x4d3855(-'0x1ae', -0x1b7) + _0x2a77c0);
            var _0x3903e5 = !![];
            await v0x4a7cc3(0x64), await _0x174700[_0x4d3855(-'0x1a6', -0x1a0)]({
                'path': _0x228a24(0xb0, 0x96) + _0x2a77c0 + '.png'
            });
        } catch (_0x2f35c4) {
            console[_0xf24aa1(0x443, 0x444)](_0xf24aa1(0x47b, 0x46c) + _0x298375 + _0xf24aa1('0x43d', 0x441));
        }
        await _0x308473[_0xf24aa1('0x458', '0x437')]();
    }
})()));

function v0x4a7cc3(_0x5c7722) {
    return new Promise(function(_0x504729) {
        setTimeout(_0x504729, _0x5c7722);
    });
}