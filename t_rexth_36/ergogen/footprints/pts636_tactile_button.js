module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Button
        side: 'F'
    },
    body: p => `
      (module PTS636 (layer F.Cu) (tedit 5EB850F0)
        (descr "https://www.digikey.com/en/products/detail/c-k/PTS636-SP43-LFS/10071717 https://www.ckswitches.com/media/2779/pts636.pdf")
        (tags "2 pin momentary action switch")

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value "RST" (at 0 0) (layer Dwgs.User)
          (effects (font (size 1 1) (thickness 0.15)))
        )

        ${'' /* outline */}
        (fp_line (start -3 -1.75) (end -3 1.75) (layer Dwgs.User) (width 0.12))
        (fp_line (start -3 1.75) (end 3 1.75) (layer Dwgs.User) (width 0.12))
        (fp_line (start 3 1.75) (end 3 -1.75) (layer Dwgs.User) (width 0.12))
        (fp_line (start 3 -1.75) (end -3 -1.75) (layer Dwgs.User) (width 0.12))
        (fp_line (start 4.5 -2) (end 4.5 2) (layer ${p.param.side}.CrtYd) (width 0.12))
        (fp_line (start 4.5 2) (end -4.5 2) (layer ${p.param.side}.CrtYd) (width 0.12))
        (fp_line (start -4.5 2) (end -4.5 -2) (layer ${p.param.side}.CrtYd) (width 0.12))
        (fp_line (start -4.5 -2) (end 4.5 -2) (layer ${p.param.side}.CrtYd) (width 0.12))

        ${'' /* pins */}
        (pad 1 thru_hole circle (at -3.2 0) (size 2 2) (drill 1.2) (layers *.Cu *.Mask) ${p.net.from.str})
        (pad 2 thru_hole circle (at 3.2 0) (size 2 2) (drill 1.2) (layers *.Cu *.Mask) ${p.net.to.str})
      )
    `
};
