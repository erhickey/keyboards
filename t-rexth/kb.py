from kmk.kmk_keyboard import KMKKeyboard as _KMKKeyboard
from kmk.quickpin.pro_micro.kb2040 import pinout as pins
from kmk.scanners.keypad import KeysScanner

_KEY_CFG_LEFT = list(map(lambda n: pins[n], [
  6,  5,  4,  1,  0,
  7,  8,  9,  10, 11,
  12, 13, 14, 15, 16,
          17, 18, 19
]))

class KMKKeyboard(_KMKKeyboard):
  def __init__(self):
    super().__init__()

    self.matrix = KeysScanner(_KEY_CFG_LEFT, value_when_pressed=False)

    self.coord_mapping = [
      0,  1,  2,  3,  4,   22, 21, 20, 19, 18,
      5,  6,  7,  8,  9,   27, 26, 25, 24, 23,
      10, 11, 12, 13, 14,  32, 31, 30, 29, 28,
              15, 16, 17,  35, 34, 33
    ]
