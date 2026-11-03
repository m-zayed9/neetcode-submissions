public class Solution {
    public int Search(int[] nums, int target) {
        int left = 0 , right = nums.Length-1;
        while(left < right -1){
            int mid = (left+right)/2;
            Console.WriteLine($"{left} --- {right} --- {mid}");
            if(nums[mid] >= nums[right]){
                left=mid;
            }else{
                right = mid;
            }
        }

        if(nums[0] < nums[nums.Length -1]){
            return BS(nums , target , 0 , nums.Length-1);
        }

        int s1 = BS(nums , target , 0 , left), s2 = BS(nums , target , right , nums.Length-1);
        Console.WriteLine($"{s1} -- {s2} -- {left} --- {right}");
        return (s1 == -1 ? (s2 == -1 ? -1 : s2) : s1);
    }

    public int BS(int[] nums , int target , int l , int r)
    {
        while(l  <= r ){
            int mid = (l+r) / 2;
            if(nums[mid] > target){
                r = mid-1;
            }else if (nums[mid] < target){
                l = mid+1;
            }else{
                return mid;
            }
        }
        return -1;
    }
}
