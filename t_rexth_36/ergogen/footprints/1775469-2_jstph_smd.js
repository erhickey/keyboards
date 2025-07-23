module.exports = {
  nets: {
    from: undefined,
    to: undefined
  },

  params: {
    class: 'JST_PH_SMD',
    reverse: false,
    sideways: false
  },

  body: p => {
    const header = `
      (module "17754692" (layer F.Cu)
      ${p.at /* parametric position */}
      ${'' /* footprint reference */}
        (descr "1775469-2-5")
        (tags "Connector")
        (attr smd)
        (fp_text reference "${p.ref}" (at 0 0) (layer F.Fab)
          ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text user %R (at -0.000 0.875) (layer F.Fab)
          (effects (font (size 1.27 1.27) (thickness 0.254)))
        )
        (fp_text value "17754692" (at -0.000 0.875) (layer F.SilkS) hide
          (effects (font (size 1.27 1.27) (thickness 0.254)))
        )
        (fp_line (start -3.7 -3.925) (end 3.7 -3.925) (layer F.Fab) (width 0.2))
        (fp_line (start 3.7 -3.925) (end 3.7 3.675) (layer F.Fab) (width 0.2))
        (fp_line (start 3.7 3.675) (end -3.7 3.675) (layer F.Fab) (width 0.2))
        (fp_line (start -3.7 3.675) (end -3.7 -3.925) (layer F.Fab) (width 0.2))
        (fp_line (start -5.1 -4.925) (end 5.1 -4.925) (layer F.CrtYd) (width 0.1))
        (fp_line (start 5.1 -4.925) (end 5.1 6.675) (layer F.CrtYd) (width 0.1))
        (fp_line (start 5.1 6.675) (end -5.1 6.675) (layer F.CrtYd) (width 0.1))
        (fp_line (start -5.1 6.675) (end -5.1 -4.925) (layer F.CrtYd) (width 0.1))
    `;

    const footer = `
        (model 1775469-2.stp
          (at (xyz 0 0.13503937270698 0.11220472065483))
          (scale (xyz 1 1 1))
          (rotate (xyz -90 0 -180))
        )
      )
    `;

    function pads(side) {
      return p.param.sideways ? `
        (pad 1 smd rect (at -1.000 3.925 0) (size 3.500 1.000) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${side === 'F' ? p.net.from.str : p.net.to.str})
        (pad 2 smd rect (at 1.000 3.925 0) (size 3.500 1.000) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${side === 'F' ? p.net.to.str : p.net.from.str})
        (pad MP1 smd rect (at -3.350 -1.825 0) (size 3.400 1.500) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
        (pad MP2 smd rect (at 3.350 -1.825 0) (size 3.400 1.500) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
      ` : `
        (pad 1 smd rect (at -1.000 3.925 0) (size 1.000 3.500) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${side === 'F' ? p.net.from.str : p.net.to.str})
        (pad 2 smd rect (at 1.000 3.925 0) (size 1.000 3.500) (layers ${side}.Cu ${side}.Paste ${side}.Mask) ${side === 'F' ? p.net.to.str : p.net.from.str})
        (pad MP1 smd rect (at -3.350 -1.825 0) (size 1.500 3.400) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
        (pad MP2 smd rect (at 3.350 -1.825 0) (size 1.500 3.400) (layers ${side}.Cu ${side}.Paste ${side}.Mask))
      ` ;
    }

    if (p.param.reverse) {
      return `
        ${header}
        ${pads('F')}
        ${pads('B')}
        ${footer}
      `
    } else {
      return `
        ${header}
        ${pads('F')}
        ${footer}
      `
    }
  }
}
