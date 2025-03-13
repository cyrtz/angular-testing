const aObj = { hello: { hi: 'world' } };
const bObj = { hello: { hi: 'world' } };

describe('CompareObjectComponent', () => {

  // 錯誤範例：比較物件內容時，不能使用 toBe
  it ('get warning when compare objects by using toBe', () => {
    expect(aObj).toBe(bObj);
  });

  it ('should compare objects by using toEqual', () => {
    expect(aObj).toEqual(bObj);
  });

  // 稀疏陣列
  it ('check array sparseness', () => {
    // jasmine 的 toEqual 比 jest 嚴謹，所以可以使用
    expect([undefined, undefined, undefined, undefined, undefined, 1]).toEqual([, , , , , 1,]);
  });

  // undefined
  it ('check undefined in object', () => {
    // typescript 的強型別特性，所以必須 expect裡有什麼，後面就要有什麼
    expect({a: undefined, b: 2}).toEqual({a: undefined,b: 3});
  });

  // 物件的屬性和值的類型
  it('check object types', () => {
    class Obj {
      hello: string;

      constructor() {
        this.hello = 'world';
      }
    }

    expect(new Obj()).toEqual({hello: 'world'});
  });

  //補充：
  xit ('get propery error message when using toBeNull', () => {
    expect(1).toBeNull();
    expect(1).toBeUndefined();
    expect(1).toBeDefined();
  });

});