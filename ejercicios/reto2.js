function distributeGifts(packOfGifts, reindeers) {
    let totalGifts = 0;
    let totalRenos = 0;
    packOfGifts.forEach(
        gift => totalGifts += gift.length
    )
    reindeers.forEach(
        reinder => totalRenos += reinder.length * 2
    );
    return Math.floor(totalGifts / totalRenos);
  }

  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]
  console.log(distributeGifts(packOfGifts, reindeers))