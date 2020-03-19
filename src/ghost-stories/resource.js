import union from "folktale/adt/union/union";
import adtMethods from "folktale/helpers/define-adt-methods";
import assertFunction from "folktale/helpers/assert-function";

// utility functions, maybe to be factored out
const isNil = x => x === null;
const isEmpty = x => x.lenght === 0;

// Resource = Query
const Resource = union("Resource", {
  Query(params, meta) {
    return { params, meta };
  },
  Empty(params, meta) {
    return { params, meta };
  },
  Data(value, params, meta) {
    return { value, params, meta };
  },
  Error(messages, params, meta) {
    return { messages, params, meta };
  }
});

adtMethods(Resource, {
  map: {
    Query: function map(f) {
      assertFunction("Resource.Query#map", f);
      return this;
    },
    Empty: function map(f) {
      assertFunction("Resource.Empty#map", f);
      return this;
    },
    Error: function map(f) {
      assertFunction("Resource.Error#map", f);
      return this;
    },
    Data: function map(f) {
      assertFunction("Resource.Data#map", f);
      const { value, params, meta } = this;
      try {
        const result = f(value);
        return Resource.Data(result, params, meta);
      } catch (e) {
        return Resource.Error([e.message], params, meta);
      }
    }
  },
  mapParams: {
    Query: function map(f) {
      assertFunction("Resource.Query#mapParams", f);
      return this;
    },
    Empty: function map(f) {
      assertFunction("Resource.Empty#mapParams", f);
      return this;
    },
    Error: function map(f) {
      assertFunction("Resource.Error#mapParams", f);
      return this;
    },
    Data: function map(f) {
      assertFunction("Resource.Data#mapParams", f);
      const { value, params, meta } = this;
      try {
        const result = f(value);
        return Resource.Data(value, result, meta);
      } catch (e) {
        return Resource.Error([e.message], params, meta);
      }
    }
  },
  mapEmptyParams: {
    Query: function mapEmptyParams(f) {
      assertFunction("Resource.Query#mapEmptyParams", f);
      return this;
    },
    Empty: function mapEmptyParams(f) {
      assertFunction("Resource.Data#mapEmptyParams", f);
      const { params, meta } = this;
      try {
        const result = f(params);
        return Resource.Empty(result, meta);
      } catch (e) {
        return Resource.Error([e.message], params, meta);
      }
    },
    Error: function mapEmptyParams(f) {
      assertFunction("Resource.Error#mapEmptyParams", f);
      return this;
    },
    Data: function mapEmptyParams(f) {
      assertFunction("Resource.Error#mapEmptyParams", f);
      return this;
    }
  },
  chain: {
    Query: function chain(f) {
      assertFunction("Resource.Query#chain", f);
      return this;
    },
    Empty: function chain(f) {
      assertFunction("Resource.Empty#chain", f);
      return this;
    },
    Error: function chain(f) {
      assertFunction("Resource.Error#chain", f);
      return this;
    },
    Data: function chain(f) {
      assertFunction("Resource.Data#chain", f);
      return f(this);
    }
  },
  update: {
    Query: function update(newParams) {
      const { params } = this;
      return Resource.Query(Object.assign({}, params, newParams));
    },
    Empty: function update(newParams) {
      const { params } = this;
      return Resource.Query(Object.assign({}, params, newParams));
    },
    Error: function update(newParams) {
      const { params } = this;
      return Resource.Query(Object.assign({}, params, newParams));
    },
    Data: function update(newParams) {
      const { params } = this;
      return Resource.Query(Object.assign({}, params, newParams));
    }
  },
  changeParams: {
    Query: function changeParams(newParams) {
      const { params } = this;
      return Resource.Empty(Object.assign({}, params, newParams));
    },
    Empty: function changeParams(newParams) {
      const { params } = this;
      return Resource.Empty(Object.assign({}, params, newParams));
    },
    Error: function changeParams(newParams) {
      const { params } = this;
      return Resource.Empty(Object.assign({}, params, newParams));
    },
    Data: function changeParams(newParams) {
      const { params } = this;
      return Resource.Empty(Object.assign({}, params, newParams));
    }
  },
  empty: {
    Query() {
      return Resource.Empty(this.params, this.meta);
    },
    Empty() {
      return Resource.Empty(this.params, this.meta);
    },
    Error() {
      return Resource.Empty(this.params, this.meta);
    },
    Data() {
      return Resource.Empty(this.params, this.meta);
    }
  },
  query: {
    Query() {
      return Resource.Query(this.params, this.meta);
    },
    Empty() {
      return Resource.Query(this.params, this.meta);
    },
    Error() {
      return Resource.Query(this.params, this.meta);
    },
    Data() {
      return Resource.Query(this.params, this.meta);
    }
  },
  fail: {
    Query(message) {
      return Resource.Error(message, this.params, this.meta);
    },
    Empty(message) {
      return Resource.Error(message, this.params, this.meta);
    },
    Error(message) {
      return Resource.Error(message, this.params, this.meta);
    },
    Data(message) {
      return Resource.Error(message, this.params, this.meta);
    }
  },
  tap: {
    Query: function tap(f) {
      assertFunction("Resource.Query#tap", f);
      return this;
    },
    Empty: function tap(f) {
      assertFunction("Resource.Empty#tap", f);
      return this;
    },
    Error: function tap(f) {
      assertFunction("Resource.Error#tap", f);
      return this;
    },
    Data: function tap(f) {
      assertFunction("Resource.Data#tap", f);
      const { value } = this;
      f(value);
      return this;
    }
  },
  getDataOr: {
    Query(value) {
      return value;
    },
    Empty(value) {
      return value;
    },
    Error(value) {
      return value;
    },
    Data() {
      return this.value;
    }
  }
});

export const fromBlob = params => blob =>
  Resource.Data(blob, params, null);

export const fromError = params => error =>
  Resource.Error([error.message], params, error);

export const fromResult = params => data => {
  if (isEmpty(data) || isNil(data)) {
    return Resource.Empty(params);
  }

  return Resource.Data(data, params);
};

export const mapPromise = params => promise =>
  promise.then(fromResult(params), fromError(params));

export const mapPromiseBlob = params => promise =>
  promise.then(fromBlob(params), fromError(params));

Resource.fromError = fromError;
Resource.fromResult = fromResult;
Resource.mapPromise = mapPromise;
Resource.mapPromiseBlob = mapPromiseBlob;
export default Resource;
