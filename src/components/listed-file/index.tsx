import pretty from 'pretty-bytes';


export default function ListedFile(
  {
    fileName,
    fileSize,
    handleClick,
  }:
  {
    fileName: string;
    fileSize: number;
    handleClick: () => void;
  },
): JSX.Element {
  return (
    <>
      <span
        className="i"
      >
        {fileName}
        &nbsp;
      </span>


      <span
        className="pl2"
      >
        (
        {pretty(fileSize)}
        )
      </span>


      <button
        type="button"
        className="ml3 br-100 bn pb1 ph2 bg-purple white dim"
        onClick={handleClick}
        aria-label={`Remove ${fileName}`}
        title={`Remove ${fileName}`}
      >
        <span
          className=""
        >
          &times;
        </span>
      </button>
    </>
  );
}
