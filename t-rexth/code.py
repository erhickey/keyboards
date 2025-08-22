import board

from kb import KMKKeyboard

from kmk.keys import KC
from kmk.modules.holdtap import HoldTap
from kmk.modules.layers import Layers
from kmk.modules.split import Split, SplitSide, SplitType


is_left = False

split = Split(
    split_type=SplitType.UART,
    split_side=SplitSide.LEFT if is_left else SplitSide.RIGHT,
    split_target_left=False,
    data_pin=board.SCL,
    data_pin2=board.SDA,
    use_pio=True,
    uart_flip = True,
)

layers = Layers()
holdtap = HoldTap()

keyboard = KMKKeyboard()
keyboard.modules = [layers, split, holdtap]

keyboard.keymap = [
    [
        KC.Q,  KC.W,  KC.E,     KC.R,    KC.T,       KC.Y,     KC.U,    KC.I,     KC.O,    KC.P,
        KC.A,  KC.S,  KC.D,     KC.F,    KC.G,       KC.H,     KC.J,    KC.K,     KC.L,    KC.SCLN,
        KC.Z,  KC.X,  KC.C,     KC.V,    KC.B,       KC.N,     KC.M,    KC.COMM,  KC.DOT,  KC.SLSH,
                      KC.LALT,  KC.LSFT, KC.BSPC,    KC.BSPC,  KC.SPC,  KC.ENT,
    ],
]

if __name__ == '__main__':
    keyboard.go()
