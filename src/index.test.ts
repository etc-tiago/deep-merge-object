import { objectMerge } from './';

describe('objectMerge test', () => {
  it('should replace true with false', () => {
    const objA = { a: true };
    const objB = { a: false };
    expect(objectMerge(objA, objB)).toEqual({ a: false });
  });

  it('should merge two simple objects', () => {
    const objA = { a: true };
    const objB = { b: 0 };
    expect(objectMerge(objA, objB)).toEqual({ a: true, b: 0 });
  });

  it('should merge two objects with basic deep level', () => {
    const objA = { a: true, c: { zoom: 12 } };
    const objB = { b: 0 };
    expect(objectMerge(objA, objB)).toEqual({ a: true, c: { zoom: 12 }, b: 0 });
  });

  // Example used on otion package
  // @see https://github.com/kripod/otion
  it('should merge two objects with "style" deep level', () => {
    const objA = {
      position: 'relative',
      padding: '8px 12px 6px 30px',
      fontSize: 17,
      lineHeight: '20px',
      height: 34,
      borderRadius: '0',
      selectors: {
        '&:before': {
          content: "''",
          width: 22,
          height: 22,
          border: '2px solid #707c90',
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        },
      },
    };
    const objB = { selectors: { '&:before': { borderRadius: '50%' } } };
    expect(objectMerge(objA, objB)).toEqual({
      position: 'relative',
      padding: '8px 12px 6px 30px',
      fontSize: 17,
      lineHeight: '20px',
      height: 34,
      borderRadius: '0',
      selectors: {
        '&:before': {
          content: "''",
          width: 22,
          height: 22,
          border: '2px solid #707c90',
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          borderRadius: '50%',
        },
      },
    });
  });
});
