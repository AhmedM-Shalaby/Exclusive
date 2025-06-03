const PriceRangeSlider = ({ minValue, maxValue, handleChange }) => {
  const minGap = 1000;
  const maxRange = 50000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), Number(maxValue) - minGap);
    handleChange({
      target: {
        name: "minPrice",
        value: value,
      },
    });
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), Number(minValue) + minGap);
    handleChange({
      target: {
        name: "maxPrice",
        value: value,
      },
    });
  };

  const getLeftPercent = () => `${(minValue / maxRange) * 100}%`;
  const getRightPercent = () => `${100 - (maxValue / maxRange) * 100}%`;

  return (
    <div className="bg-white p-6 rounded-xl w-full max-w-md mx-auto shadow-md mb-10">
      <h2 className="text-xl font-semibold  mb-4">Price Range</h2>
      <div className="font-medium text-lg mb-4">
        {minValue} EGP - {maxValue} EGP
      </div>

      <div className="relative h-2 bg-gray-300 rounded-md">
        <div
          className="absolute h-2 bg-[var(--main-color)] rounded-md"
          style={{
            left: getLeftPercent(),
            right: getRightPercent(),
          }}
        ></div>
      </div>

      <div className="relative mt-4">
        <input
          type="range"
          min={0}
          max={maxRange}
          step={100}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full appearance-none pointer-events-none"
        />
        <input
          type="range"
          min={0}
          max={maxRange}
          step={100}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
