// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block                   = require("bs-platform/lib/js/block.js");
var Curry                   = require("bs-platform/lib/js/curry.js");
var Printf                  = require("bs-platform/lib/js/printf.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Caml_exceptions         = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var $$Error = Caml_exceptions.create("Parser-Languid.Basics.Error");

var Basics = /* module */[/* Error */$$Error];

function _menhir_fail() {
  Printf.fprintf(Pervasives.stderr, /* Format */[
        /* String_literal */Block.__(11, [
            "Internal failure -- please contact the parser generator's developers.\n",
            /* Flush */Block.__(10, [/* End_of_format */0])
          ]),
        "Internal failure -- please contact the parser generator's developers.\n%!"
      ]);
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "parser.ml",
          49,
          4
        ]
      ];
}

function _menhir_goto_command(_menhir_env, _menhir_stack, _menhir_s, _v) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s,
    _v
  ];
  if (_menhir_env[/* _menhir_error */3]) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "parser.ml",
            140,
            4
          ]
        ];
  }
  var _tok = _menhir_env[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number") {
    switch (_tok) {
      case 0 : 
          return _menhir_run1(_menhir_env, _menhir_stack$1, /* MenhirState19 */0);
      case 2 : 
          return _menhir_run7(_menhir_env, _menhir_stack$1, /* MenhirState19 */0);
      case 3 : 
          return _menhir_run9(_menhir_env, _menhir_stack$1, /* MenhirState19 */0);
      case 5 : 
          return _menhir_run12(_menhir_env, _menhir_stack$1, /* MenhirState19 */0);
      case 6 : 
          return _menhir_run14(_menhir_env, _menhir_stack$1, /* MenhirState19 */0);
      case 8 : 
      case 9 : 
          exit = 2;
          break;
      case 1 : 
      case 4 : 
      case 7 : 
      case 10 : 
      case 11 : 
          exit = 1;
          break;
      
    }
  } else {
    exit = 1;
  }
  switch (exit) {
    case 1 : 
        if (_menhir_env[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "parser.ml",
                  159,
                  8
                ]
              ];
        }
        _menhir_env[/* _menhir_error */3] = /* true */1;
        return _menhir_errorcase(_menhir_env, _menhir_stack$1, /* MenhirState19 */0);
    case 2 : 
        var _v$1 = /* :: */[
          _v,
          /* [] */0
        ];
        return _menhir_goto_commands(_menhir_env, _menhir_stack, _menhir_s, _v$1);
    
  }
}

function _menhir_errorcase(_, __menhir_stack, __menhir_s) {
  while(true) {
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    if (_menhir_s !== 1) {
      if (_menhir_s >= 5) {
        throw $$Error;
      } else {
        __menhir_s = _menhir_stack[1];
        __menhir_stack = _menhir_stack[0];
        continue ;
        
      }
    } else {
      var match = _menhir_stack[0];
      __menhir_s = match[1];
      __menhir_stack = match[0];
      continue ;
      
    }
  };
}

function _menhir_run9(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number") {
    exit = 1;
  } else if (_tok.tag === 1) {
    var _menhir_env$2 = _menhir_discard(_menhir_env$1);
    var _tok$1 = _menhir_env$2[/* _menhir_token */2];
    var exit$1 = 0;
    if (typeof _tok$1 === "number") {
      exit$1 = 2;
    } else if (_tok$1.tag) {
      exit$1 = 2;
    } else {
      var _menhir_env$3 = _menhir_discard(_menhir_env$2);
      var _v = /* Now */Block.__(0, [/* Send */Block.__(2, [
              _tok[0],
              _tok$1[0]
            ])]);
      return _menhir_goto_command(_menhir_env$3, _menhir_stack, _menhir_s, _v);
    }
    if (exit$1 === 2) {
      if (_menhir_env$2[/* _menhir_error */3]) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "parser.ml",
                282,
                12
              ]
            ];
      }
      _menhir_env$2[/* _menhir_error */3] = /* true */1;
      return _menhir_errorcase(_menhir_env$2, _menhir_stack, _menhir_s);
    }
    
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "parser.ml",
              288,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = /* true */1;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack, _menhir_s);
  }
  
}

function _menhir_run14(__menhir_env, __menhir_stack, __menhir_s) {
  while(true) {
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    var _menhir_env = __menhir_env;
    var _menhir_stack$1 = /* tuple */[
      _menhir_stack,
      _menhir_s
    ];
    var _menhir_env$1 = _menhir_discard(_menhir_env);
    var _tok = _menhir_env$1[/* _menhir_token */2];
    var exit = 0;
    if (typeof _tok === "number") {
      exit = 1;
    } else if (_tok.tag) {
      exit = 1;
    } else {
      var _menhir_stack_001 = _tok[0];
      var _menhir_stack$2 = /* tuple */[
        _menhir_stack$1,
        _menhir_stack_001
      ];
      var _menhir_env$2 = _menhir_discard(_menhir_env$1);
      var _tok$1 = _menhir_env$2[/* _menhir_token */2];
      var exit$1 = 0;
      if (typeof _tok$1 === "number") {
        if (_tok$1 >= 11) {
          var _menhir_env$3 = _menhir_discard(_menhir_env$2);
          var _tok$2 = _menhir_env$3[/* _menhir_token */2];
          var exit$2 = 0;
          if (typeof _tok$2 === "number") {
            switch (_tok$2) {
              case 0 : 
                  return _menhir_run1(_menhir_env$3, _menhir_stack$2, /* MenhirState16 */1);
              case 2 : 
                  return _menhir_run7(_menhir_env$3, _menhir_stack$2, /* MenhirState16 */1);
              case 3 : 
                  return _menhir_run9(_menhir_env$3, _menhir_stack$2, /* MenhirState16 */1);
              case 5 : 
                  return _menhir_run12(_menhir_env$3, _menhir_stack$2, /* MenhirState16 */1);
              case 6 : 
                  __menhir_s = /* MenhirState16 */1;
                  __menhir_stack = _menhir_stack$2;
                  __menhir_env = _menhir_env$3;
                  continue ;
                  case 1 : 
              case 4 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
                  exit$2 = 3;
                  break;
              
            }
          } else {
            exit$2 = 3;
          }
          if (exit$2 === 3) {
            if (_menhir_env$3[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "parser.ml",
                      341,
                      16
                    ]
                  ];
            }
            _menhir_env$3[/* _menhir_error */3] = /* true */1;
            return _menhir_errorcase(_menhir_env$3, _menhir_stack$2, /* MenhirState16 */1);
          }
          
        } else {
          exit$1 = 2;
        }
      } else {
        exit$1 = 2;
      }
      if (exit$1 === 2) {
        if (_menhir_env$2[/* _menhir_error */3]) {
          throw [
                Caml_builtin_exceptions.assert_failure,
                [
                  "parser.ml",
                  345,
                  12
                ]
              ];
        }
        _menhir_env$2[/* _menhir_error */3] = /* true */1;
        return _menhir_errorcase(_menhir_env$2, _menhir_stack, _menhir_s);
      }
      
    }
    if (exit === 1) {
      if (_menhir_env$1[/* _menhir_error */3]) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "parser.ml",
                351,
                8
              ]
            ];
      }
      _menhir_env$1[/* _menhir_error */3] = /* true */1;
      return _menhir_errorcase(_menhir_env$1, _menhir_stack, _menhir_s);
    }
    
  };
}

function _menhir_discard(_menhir_env) {
  var lexer = _menhir_env[/* _menhir_lexer */0];
  var lexbuf = _menhir_env[/* _menhir_lexbuf */1];
  var _tok = Curry._1(lexer, lexbuf);
  return /* record */[
          /* _menhir_lexer */lexer,
          /* _menhir_lexbuf */lexbuf,
          /* _menhir_token */_tok,
          /* _menhir_error : false */0
        ];
}

function _menhir_run7(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number") {
    switch (_tok) {
      case 1 : 
          return _menhir_run2(_menhir_env$1, _menhir_stack$1, /* MenhirState7 */3);
      case 4 : 
          return _menhir_run3(_menhir_env$1, _menhir_stack$1, /* MenhirState7 */3);
      case 7 : 
          return _menhir_run4(_menhir_env$1, _menhir_stack$1, /* MenhirState7 */3);
      case 10 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack$1, /* MenhirState7 */3);
      case 0 : 
      case 2 : 
      case 3 : 
      case 5 : 
      case 6 : 
      case 8 : 
      case 9 : 
      case 11 : 
          exit = 1;
          break;
      
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "parser.ml",
              256,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = /* true */1;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState7 */3);
  }
  
}

function _menhir_run1(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number") {
    switch (_tok) {
      case 1 : 
          return _menhir_run2(_menhir_env$1, _menhir_stack$1, /* MenhirState1 */4);
      case 4 : 
          return _menhir_run3(_menhir_env$1, _menhir_stack$1, /* MenhirState1 */4);
      case 7 : 
          return _menhir_run4(_menhir_env$1, _menhir_stack$1, /* MenhirState1 */4);
      case 10 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack$1, /* MenhirState1 */4);
      case 0 : 
      case 2 : 
      case 3 : 
      case 5 : 
      case 6 : 
      case 8 : 
      case 9 : 
      case 11 : 
          exit = 1;
          break;
      
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "parser.ml",
              237,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = /* true */1;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState1 */4);
  }
  
}

function _menhir_run12(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_stack$1 = /* tuple */[
    _menhir_stack,
    _menhir_s
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number") {
    switch (_tok) {
      case 1 : 
          return _menhir_run2(_menhir_env$1, _menhir_stack$1, /* MenhirState12 */2);
      case 4 : 
          return _menhir_run3(_menhir_env$1, _menhir_stack$1, /* MenhirState12 */2);
      case 7 : 
          return _menhir_run4(_menhir_env$1, _menhir_stack$1, /* MenhirState12 */2);
      case 10 : 
          return _menhir_run5(_menhir_env$1, _menhir_stack$1, /* MenhirState12 */2);
      case 0 : 
      case 2 : 
      case 3 : 
      case 5 : 
      case 6 : 
      case 8 : 
      case 9 : 
      case 11 : 
          exit = 1;
          break;
      
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "parser.ml",
              309,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = /* true */1;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack$1, /* MenhirState12 */2);
  }
  
}

function _menhir_goto_direction(_menhir_env, _menhir_stack, _menhir_s, _v) {
  switch (_menhir_s) {
    case 2 : 
        var _v$1 = /* Turn */Block.__(1, [/* Move */Block.__(0, [_v])]);
        return _menhir_goto_command(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$1);
    case 3 : 
        var _v$2 = /* Turn */Block.__(1, [/* Shoot */Block.__(1, [_v])]);
        return _menhir_goto_command(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$2);
    case 4 : 
        var _v$3 = /* Now */Block.__(0, [/* Walk */Block.__(0, [_v])]);
        return _menhir_goto_command(_menhir_env, _menhir_stack[0], _menhir_stack[1], _v$3);
    case 0 : 
    case 1 : 
    case 5 : 
        return _menhir_fail(/* () */0);
    
  }
}

function _menhir_run5(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_goto_direction(_menhir_env$1, _menhir_stack, _menhir_s, /* Down */1);
}

function _menhir_run2(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_goto_direction(_menhir_env$1, _menhir_stack, _menhir_s, /* Up */0);
}

function _menhir_run3(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_goto_direction(_menhir_env$1, _menhir_stack, _menhir_s, /* Right */3);
}

function _menhir_run4(_menhir_env, _menhir_stack, _menhir_s) {
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  return _menhir_goto_direction(_menhir_env$1, _menhir_stack, _menhir_s, /* Left */2);
}

function _menhir_goto_commands(_menhir_env, __menhir_stack, __menhir_s, __v) {
  while(true) {
    var _v = __v;
    var _menhir_s = __menhir_s;
    var _menhir_stack = __menhir_stack;
    switch (_menhir_s) {
      case 0 : 
          var _v_000 = _menhir_stack[2];
          var _v$1 = /* :: */[
            _v_000,
            _v
          ];
          __v = _v$1;
          __menhir_s = _menhir_stack[1];
          __menhir_stack = _menhir_stack[0];
          continue ;
          case 1 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "parser.ml",
                    57,
                    8
                  ]
                ];
          }
          var _tok = _menhir_env[/* _menhir_token */2];
          var exit = 0;
          if (typeof _tok === "number") {
            if (_tok !== 9) {
              exit = 1;
            } else {
              var _menhir_env$1 = _menhir_discard(_menhir_env);
              var match = _menhir_stack[0];
              var _v$2 = /* Now */Block.__(0, [/* Listen */Block.__(1, [
                      _menhir_stack[1],
                      _v
                    ])]);
              return _menhir_goto_command(_menhir_env$1, match[0], match[1], _v$2);
            }
          } else {
            exit = 1;
          }
          if (exit === 1) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "parser.ml",
                      71,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = /* true */1;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      case 2 : 
      case 3 : 
      case 4 : 
          return _menhir_fail(/* () */0);
      case 5 : 
          if (_menhir_env[/* _menhir_error */3]) {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "parser.ml",
                    84,
                    8
                  ]
                ];
          }
          var _tok$1 = _menhir_env[/* _menhir_token */2];
          var exit$1 = 0;
          if (typeof _tok$1 === "number") {
            if (_tok$1 !== 8) {
              exit$1 = 1;
            } else {
              return _v;
            }
          } else {
            exit$1 = 1;
          }
          if (exit$1 === 1) {
            if (_menhir_env[/* _menhir_error */3]) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "parser.ml",
                      98,
                      12
                    ]
                  ];
            }
            _menhir_env[/* _menhir_error */3] = /* true */1;
            return _menhir_errorcase(_menhir_env, _menhir_stack, _menhir_s);
          }
          break;
      
    }
  };
}

function prog(lexer, lexbuf) {
  var _menhir_env = /* record */[
    /* _menhir_lexer */lexer,
    /* _menhir_lexbuf */lexbuf,
    /* _menhir_token : () */0,
    /* _menhir_error : false */0
  ];
  var _menhir_stack_001 = _menhir_env[/* _menhir_lexbuf */1][/* lex_curr_p */11];
  var _menhir_stack = /* tuple */[
    /* () */0,
    _menhir_stack_001
  ];
  var _menhir_env$1 = _menhir_discard(_menhir_env);
  var _tok = _menhir_env$1[/* _menhir_token */2];
  var exit = 0;
  if (typeof _tok === "number") {
    switch (_tok) {
      case 0 : 
          return _menhir_run1(_menhir_env$1, _menhir_stack, /* MenhirState0 */5);
      case 2 : 
          return _menhir_run7(_menhir_env$1, _menhir_stack, /* MenhirState0 */5);
      case 3 : 
          return _menhir_run9(_menhir_env$1, _menhir_stack, /* MenhirState0 */5);
      case 5 : 
          return _menhir_run12(_menhir_env$1, _menhir_stack, /* MenhirState0 */5);
      case 6 : 
          return _menhir_run14(_menhir_env$1, _menhir_stack, /* MenhirState0 */5);
      case 1 : 
      case 4 : 
      case 7 : 
      case 8 : 
      case 9 : 
      case 10 : 
      case 11 : 
          exit = 1;
          break;
      
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    if (_menhir_env$1[/* _menhir_error */3]) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "parser.ml",
              393,
              8
            ]
          ];
    }
    _menhir_env$1[/* _menhir_error */3] = /* true */1;
    return _menhir_errorcase(_menhir_env$1, _menhir_stack, /* MenhirState0 */5);
  }
  
}

var _eRR = $$Error;

exports.Basics                 = Basics;
exports.$$Error                = $$Error;
exports._eRR                   = _eRR;
exports._menhir_fail           = _menhir_fail;
exports._menhir_goto_commands  = _menhir_goto_commands;
exports._menhir_goto_direction = _menhir_goto_direction;
exports._menhir_goto_command   = _menhir_goto_command;
exports._menhir_run2           = _menhir_run2;
exports._menhir_run3           = _menhir_run3;
exports._menhir_run4           = _menhir_run4;
exports._menhir_run5           = _menhir_run5;
exports._menhir_errorcase      = _menhir_errorcase;
exports._menhir_run1           = _menhir_run1;
exports._menhir_run7           = _menhir_run7;
exports._menhir_run9           = _menhir_run9;
exports._menhir_run12          = _menhir_run12;
exports._menhir_run14          = _menhir_run14;
exports._menhir_discard        = _menhir_discard;
exports.prog                   = prog;
/* No side effect */
