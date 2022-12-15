class Solution
{
  select(arr,i){
    selectionSort(arr, i);
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
   for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        //console.log(arr);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
  }
}