/*
   Gaussian distribution: http://mathworld.wolfram.com/NormalDistribution.html

   u: mean
   a: standard deviation
   a^2: variance
 */

export function calcMean(values: number[]): number {
  let count = 0;

  return values.reduce((sum, val, i) => {
    count += val;
    return sum + i * val;
  }, 0) / count;
}

export function calcStandardDeviation(mean: number, values: number[]): number {
  let count = 0;

  return Math.sqrt(values.reduce((sum, val, i) => {
    count += val;

    return sum + Math.pow(i - mean, 2) * val;
  }, 0) / count);
}

export function getGaussian(start: number, end: number, mean: number, sd: number): number[] {
  const frac = 1 / (mean * Math.sqrt(2 * Math.PI));
  const denominator = 2 * Math.pow(sd, 2);

  let output = [];
  let max = 0;

  for (let x = start; x < end; x += 1) {
    const numerator = -Math.pow(x - mean, 2);
    max = Math.max(output[x] = frac * Math.pow(Math.E, numerator / denominator), max);
  }
  output = output.map(val => val / max);

  return output;
}