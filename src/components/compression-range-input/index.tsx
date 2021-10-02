import { MAX_COMPRESSION } from '../../constants';
import styles from './index.module.css';


export default function CompressionRangeInput(
  {
    compression,
    handleCompressionChange,
  }:
  {
    compression: number;
    handleCompressionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
): JSX.Element {
  return (
    <p
      className="mt5 flex flex-wrap items-end"
    >
      <label
        className="b flex flex-column w-50-m w-50-l pb3"
        htmlFor="compression"
      >
        <span
          className="mb4"
        >
          Compression level:
        </span>


        <input
          type="range"
          className={styles.rangeInput}
          min={0}
          max={MAX_COMPRESSION}
          step={1}
          value={compression}
          onChange={handleCompressionChange}
          name="compression"
          id="compression"
        />
      </label>

      <span
        className="bg-black white b ml3 br-100 pv2 ph3"
      >
        {compression}
      </span>
    </p>
  )
}
