## Some canned emotes that you might find interesting.
import dcfurs
from random import choice

## Tall font for emotes
font7bit = {
    '!':bytearray([0x2f]),
    '"':bytearray([0x06,0x00,0x06]),
    '#':bytearray([0x14,0x3e,0x14,0x3e,0x14]),
    '$':bytearray([0x04,0x2a,0x6b,0x2a,0x10]),
    '%':bytearray([0x26,0x16,0x08,0x34,0x32]),
    '&':bytearray([0x16,0x29,0x29,0x10,0x28]),
    '\'':bytearray([0x06]),
    '(':bytearray([0x1e,0x21]),
    ')':bytearray([0x21,0x1e]),
    '*':bytearray([0x08,0x1c,0x08]),
    '+':bytearray([0x08,0x08,0x3e,0x08,0x08]),
    ',':bytearray([0x10,0x30]),
    '-':bytearray([0x08,0x08,0x08]),
    '.':bytearray([0x10]),
    '/':bytearray([0x20,0x10,0x08,0x04,0x02]),
    '0':bytearray([0x1e,0x21,0x21,0x1e]),
    '1':bytearray([0x22,0x3f,0x20]),
    '2':bytearray([0x32,0x29,0x29,0x26]),
    '3':bytearray([0x12,0x21,0x25,0x1a]),
    '4':bytearray([0x0e,0x08,0x08,0x3f]),
    '5':bytearray([0x13,0x25,0x25,0x19]),
    '6':bytearray([0x1e,0x25,0x25,0x18]),
    '7':bytearray([0x01,0x31,0x0d,0x03]),
    '8':bytearray([0x1a,0x25,0x25,0x1a]),
    '9':bytearray([0x06,0x29,0x29,0x1e]),
    ':':bytearray([0x14]),
    ';':bytearray([0x34]),
    '<':bytearray([0x08,0x14,0x22,0x00]),
    '=':bytearray([0x14,0x14,0x14,0x14]),
    '>':bytearray([0x00,0x22,0x14,0x08]),
    '?':bytearray([0x02,0x01,0x29,0x09,0x06]),
    '@':bytearray([0x1c,0x42,0x59,0x15,0x3d,0x22,0x1c]),
    'A':bytearray([0x3e,0x09,0x09,0x3e]),
    'B':bytearray([0x3f,0x25,0x25,0x1a]),
    'C':bytearray([0x1e,0x21,0x21,0x12]),
    'D':bytearray([0x3f,0x21,0x21,0x1e]),
    'E':bytearray([0x3f,0x25,0x25,0x21]),
    'F':bytearray([0x3f,0x05,0x05,0x01]),
    'G':bytearray([0x1e,0x21,0x29,0x32]),
    'H':bytearray([0x3f,0x08,0x08,0x3f]),
    'I':bytearray([0x21,0x3f,0x21]),
    'J':bytearray([0x11,0x21,0x1f,0x01]),
    'K':bytearray([0x3f,0x04,0x0a,0x31]),
    'L':bytearray([0x3f,0x20,0x20,0x20]),
    'M':bytearray([0x3f,0x02,0x04,0x02,0x3f]),
    'N':bytearray([0x3f,0x02,0x04,0x3f]),
    'O':bytearray([0x1e,0x21,0x21,0x1e]),
    'P':bytearray([0x3f,0x09,0x09,0x06]),
    'Q':bytearray([0x1e,0x21,0x31,0x5e]),
    'R':bytearray([0x3f,0x09,0x09,0x36]),
    'S':bytearray([0x24,0x2a,0x2a,0x12]),
    'T':bytearray([0x01,0x01,0x3f,0x01,0x01]),
    'U':bytearray([0x1e,0x20,0x20,0x1e]),
    'V':bytearray([0x0e,0x10,0x20,0x10,0x0e]),
    'W':bytearray([0x1e,0x20,0x18,0x20,0x1e]),
    'X':bytearray([0x22,0x14,0x08,0x14,0x22]),
    'Y':bytearray([0x03,0x04,0x38,0x04,0x03]),
    'Z':bytearray([0x31,0x29,0x25,0x23]),
    '[':bytearray([0x3f,0x21]),
    '\\':bytearray([0x02,0x04,0x08,0x10,0x20]),
    ']':bytearray([0x21,0x3f]),
    '^':bytearray([0x08,0x04,0x02,0x04,0x08]),
    '_':bytearray([0x20,0x20,0x20,0x20,0x20]),
    ## TODO: `
    ## TODO: lowercase alphabet
    'o':bytearray([0x18,0x24,0x18]),
    '{':bytearray([0x08,0x36,0x41]),
    '|':bytearray([0x3f]),
    '}':bytearray([0x41,0x36,0x08]),
    '~':bytearray([0x08,0x04,0x08,0x04]),
}

def owo():
    dcfurs.set_row(0, 0x1c00e)
    dcfurs.set_row(1, 0x22011)
    dcfurs.set_row(2, 0x22851)
    dcfurs.set_row(3, 0x22b51)
    dcfurs.set_row(4, 0x22491)
    dcfurs.set_row(5, 0x22011)
    dcfurs.set_row(6, 0x1c00e)

def boop():
    dcfurs.set_row(0, 0x0e48e)
    dcfurs.set_row(1, 0x12b52)
    dcfurs.set_row(2, 0x12b52)
    dcfurs.set_row(3, 0x0eb4e)
    dcfurs.set_row(4, 0x02492)
    dcfurs.set_row(5, 0x02012)
    dcfurs.set_row(6, 0x0200e)

def beep():
    dcfurs.set_row(0, 0x0e00e)
    dcfurs.set_row(1, 0x12492)
    dcfurs.set_row(2, 0x12b52)
    dcfurs.set_row(3, 0x0e6ce)
    dcfurs.set_row(4, 0x02d92)
    dcfurs.set_row(5, 0x02012)
    dcfurs.set_row(6, 0x0200e)

def awoo():
    dcfurs.set_row(0, 0x00006)
    dcfurs.set_row(1, 0x11229)
    dcfurs.set_row(2, 0x2aa29)
    dcfurs.set_row(3, 0x2aaaf)
    dcfurs.set_row(4, 0x11149)
    dcfurs.set_row(5, 0x00009)
    dcfurs.set_row(6, 0x00000)

def my_own_penis():
    dcfurs.set_row(0, 0x0f03c)
    dcfurs.set_row(1, 0x00000)
    dcfurs.set_row(2, 0x00000)
    dcfurs.set_row(3, 0x00000)
    dcfurs.set_row(4, 0x00000)
    dcfurs.set_row(5, 0x00000)
    dcfurs.set_row(6, 0x00000)

## Render an emote from an ascii string
def render(str):
    ## Check for special cases
    if str == 'boop':
        boop()
        return
    if str == 'owo':
        owo()
        return
    if str == 'awoo':
        awoo()
        return

    ## Otherwise, generate from our character set.
    lbits = font7bit[str[0]]
    rbits = font7bit[str[-1]]
    dcfurs.clear()

    ## Draw the left character.
    column = int((8 - len(lbits))/2)
    for colbits in lbits:
        for y in range(0, dcfurs.nrows):
            if (colbits & (1 << y)) != 0:
                dcfurs.set_pixel(column, y, 0xff)
        column = column + 1

    ## Draw the right character.
    column = int((28 - len(rbits) + 1)/2)
    for colbits in rbits:
        for y in range(0, dcfurs.nrows):
            if (colbits & (1 << y)) != 0:
                dcfurs.set_pixel(column,y,0xff)
        column = column + 1

prebuilt = [
    owo,
    "\./"
    "X.X",
    "-.-",
    '"."',
    "C.C",
    "?.?",
    "#.#",
    "@.@",
    "!.!",
    "~.^",
    "o.o",
    "O.o",
    "O.O",
    ">.<",
    "=.=",
    "9.9",
    ## c.c
    [0x00000, 0x00000, 0x0f03c, 0x01020, 0x01020, 0, 0],
    ## \\.\\
    [0x00000, 0x00000, 0x0a00a, 0x0a00a, 0x14014, 0x14014, 0],
    ## ` . `
    [0x00000, 0x10002, 0x08004, 0, 0, 0, 0],
    ## u.u
    [0x00000, 0x00000, 0x00000, 0x11022, 0x1f03e, 0, 0],
]

## Draw a random emote from prebuilt[]
def random():
    x = choice(prebuilt)
    if type(x) is str:
        render(x)
    elif callable(x):
        x()
    else:
        dcfurs.set_frame(x)
