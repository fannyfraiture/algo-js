function factorial(a) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (a === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return a * factorial(a-1);
}
console.log(factorial(8));