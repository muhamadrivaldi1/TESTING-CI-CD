// test('Penjumlahan berhasil', () => {
//     expect(1 + 1).toBe(2); // Tes ini akan berhasil
//   });
  
//   test('Penjumlahan gagal', () => {
//     expect(1 + 1).toBe(3); // Tes ini akan gagal
//   });
  

describe('Validasi Kolom Nama', () => {
    const validateName = (name) => {
      if (name.length < 5) return 'Nama terlalu pendek';
      if (name.length > 5) return 'Nama terlalu panjang';
      return 'Nama valid';
    };
  
    test('Nama kurang dari 5 karakter', () => {
      const result = validateName('bagas.tp'); // Hanya 3 karakter
      expect(result).toBe('Nama terlalu pendek');
    });
  
    test('Nama lebih dari 5 karakter', () => {
      const result = validateName('danu'); // Lebih dari 5 karakter
      expect(result).toBe('Nama terlalu panjang');
    });
  
    test('Nama tepat 5 karakter', () => {
      const result = validateName('rivalKO'); // Tepat 5 karakter
      expect(result).toBe('Nama valid');
    });
  });
  