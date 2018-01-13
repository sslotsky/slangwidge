// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List           = require("bs-platform/lib/js/list.js");
var Lexing         = require("bs-platform/lib/js/lexing.js");
var Lexer$Languid  = require("./lexer.bs.js");
var Parser$Languid = require("./parser.bs.js");

var lexbuf = Lexing.from_string("walk shoot");

var commands = Parser$Languid.prog(Lexer$Languid.read, lexbuf);

List.iter((function (command) {
        if (command.tag) {
          if (command[0] !== 0) {
            console.log("shoot");
            return /* () */0;
          } else {
            return /* () */0;
          }
        } else if (command[0] !== 0) {
          return /* () */0;
        } else {
          console.log("walk");
          return /* () */0;
        }
      }), commands);

exports.lexbuf   = lexbuf;
exports.commands = commands;
/* lexbuf Not a pure module */
