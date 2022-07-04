import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  //   console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next Quote
      </button>

      <button
        className="btn btn-primary"
        disabled={counter == 1}
        onClick={() => decrement(1)}
      >
        Before Quote
      </button>

      <button
        className="btn btn-primary"
        disabled={counter == 1}
        onClick={() => reset()}
      >
        Reset
      </button>
    </>
  );
};
