type Success<T> = {
  isSuccess: true;
  data: T;
};

type Failure<T> = {
  isSuccess: false;
  error: T;
};

export type Result<E, D> = Failure<E> | Success<D>;
