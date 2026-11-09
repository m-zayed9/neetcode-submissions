public class TimeMap {
    public Dictionary<string, List<object[]>> Items = new();
    public void Set(string key, string value, int timestamp)
    {
        if (!Items.ContainsKey(key))
            Items[key] = new List<object[]>();

        Items[key].Add(new object[] { timestamp, value });
    }
    
    public string Get(string key, int timestamp) {
        
        if(!Items.ContainsKey(key)){
            return "";
        }
        if((int)Items[key][0][0] > timestamp){
            return "";
        }

        int l = 0 , r = Items[key].Count-1;
        while(l + 1 < r){
            int mid = (l + r) / 2 , value = (int)Items[key][mid][0];
            if( value > timestamp)
            {
                r = mid - 1;
            }else
            {
                l = mid;
            }
        }
        int ans = (int)Items[key][r][0] > timestamp ? l : r;
        return (string)Items[key][ans][1];
    }
}
