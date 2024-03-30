const spriteList = {
  link: {
    defaultPalette: 0,
    display: "Link",
    contributor: "Nintendo",
  },
  // NOTE: File select harp-playing animation is probably broken for marin due
  // to animation hacks. Doesn't really matter since linked games aren't
  // supported, for now.
  marin: {
    defaultPalette: 3,
    display: "Marin",
    contributor: "Stewmat",

    // Hacks for animation data, because I was too lazy to draw harp & flute
    // sprites (uses her 'singing' sprites instead).
    // Must be cautious to ensure that the length of the animation doesn't
    // change when hacking it, lest one sprite becomes faster than another!
    animationHacks: [
      {
        // Flute animation
        agesLabel:    'animationData19f90',
        seasonsLabel: 'animationData19cf7',
        data: [
          60,0x34,0x00,
          30,0x35,0x01,
          60,0x36,0x01,
          30,0x35,0x00,
          60,0x34,0x00,
          15,0x35,0x01,
          0x7f,0x2e,0xff
        ]
      },
      {
        // Harp animation
        agesLabel:    'animationData19faa',
        seasonsLabel: 'animationDataHarp',
        data: [
          40,0x34,0x00,
          12,0x35,0x01,
          40,0x36,0x01,
          12,0x35,0x00,
          40,0x34,0x00,
          12,0x35,0x01,
          40,0x36,0x01,
          12,0x35,0x00,
          40,0x34,0x00,
          12,0x35,0x01,
          0x01,0x36,0x81,
          0x7f,0x1c,0xff
        ]
      },
    ]
  },
  demonlink: {
    defaultPalette: 5,
    display: "Demonic Link",
    contributor: "Stewmat",
  },
  likelike: {
    defaultPalette: 3,
    display: "Like-Like",
    contributor: "Stewmat",

    // Hacks for "GfxPointer" data, needed due to the nature of certain
    // animations being changed. For example, the up/down walking animations no
    // longer work by flipping the whole sprite horizontally, they require two
    // independant 16x16 sprites. While some "unflipping" was done in the
    // randomizer base ROM, it does not apply to these types of animations, so
    // we're applying it manually here.
    // The data format is a bit complicated, so some processing is done in
    // api.js to convert it to raw bytes.
    gfxPointerHacks: {
      specialObject00GfxPointers: {
        // Commented these out since they make no difference for like-like
        // sprite, but could a be useful reference
        //84: [0x00, 'spr_link', 0x0080, 0x04], // Up standing frame: borrow left standing sprite
        //86: [0x00, 'spr_link', 0x0080, 0x04], // Down standing frame: borrow left standing sprite

        128: [0x00, 'spr_link', 0x00c0, 0x04], // Up walking frame: borrow left walking sprite
        130: [0x00, 'spr_link', 0x00c0, 0x04], // Down walking frame: borrow left walking sprite
        136: [0x00, 'spr_link', 0x1140, 0x04], // Up walking & holding frame: borrow left version
        138: [0x00, 'spr_link', 0x1140, 0x04], // Down walking & holding frame: borrow left version
        168: [0x00, 'spr_link', 0x16c0, 0x04], // Moving up underwater: borrow left version
        170: [0x00, 'spr_link', 0x16c0, 0x04], // Moving down underwater: borrow left version
      }
    }
  }
};

(function(exports){
  // Get the object containing the list of sprites
  exports.get = function(){
    return spriteList;
  };

})(typeof exports === 'undefined'? this['sprite-config']={}: exports);