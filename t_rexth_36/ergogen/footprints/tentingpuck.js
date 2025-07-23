module.exports = {
  nets: {},
  params: {
    reverseSilks: false,
    centerHole: false,
    northHole: true,
    westHole: true,
    southHole: true,
    eastHole: true,
  },
  body: (p) => {
    let wordParts;
    if (p.param.reverseSilks) {
      wordParts = ["puck", "tenting"];
    } else {
      wordParts = ["tenting", "puck"];
    }

    return `
(module "Tenting Puck" (layer F.Cu) (tedit 5F09F7E8)
  ${p.at /* parametric position */}

  (fp_text reference "${p.ref}" (at 7.6835 1.4605) (layer F.Fab)
    ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )

  (fp_circle (center 0 0) (end 20.55 0) (layer Dwgs.User) (width 0.55))
  (fp_line (start -1.6 20.55) (end -1.6 -20.55) (layer Dwgs.User) (width 0.2))
  (fp_line (start 1.6 20.55) (end 1.6 -20.55) (layer Dwgs.User) (width 0.2))
  (fp_line (start 17.6 10.5) (end 17.6 -10.5) (layer Dwgs.User) (width 0.2))
  (fp_line (start -17.6 10.5) (end -17.6 -10.5) (layer Dwgs.User) (width 0.2))
  ${
    !p.param.centerHole
      ? ""
      : `(pad "" thru_hole circle (at 0 0 ${p.rot}) (size 6.8 6.8) (drill 6.2) (layers *.Cu *.Mask))`
  }
  ${
    !p.param.northHole
      ? ""
      : "(pad 1 thru_hole circle (at 0 -19.05 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.eastHole
      ? ""
      : "(pad 1 thru_hole circle (at 19.05  0 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.southHole
      ? ""
      : "(pad 1 thru_hole circle (at 0  19.05 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
  ${
    !p.param.westHole
      ? ""
      : "(pad 1 thru_hole circle (at -19.05 0 " +
        p.rot +
        ") (size 4.4 4.4) (drill 2.2) (layers *.Cu *.Mask))"
  }
)
    `;
  },
};
