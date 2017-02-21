var Sort = {
    array: [3,5,7,3,42,1],
    bubbleSort: function(arr){
        var arr = arr ? arr : this.array;
        var len = arr.length;
        var i,j,temp;
        for(i=0;i<len;i++){
            for(j=0;j<len;j++){
                if(arr[i]<arr[j]){
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }
        return arr;
    },
    quickSort: function(arr){
        var arr = arr ? arr : this.array;
        var len = arr.length;
        var i=0,j=len-1,tempi,tempj,key;
        var sort = function(i,j){
            if(i==j) return;
            tempi = i;
            tempj = j;
            key = arr[i];
            while(j>i){
                if(arr[j]>=key){j--;}
                else{
                    arr[i] = arr[j];
                    while(j > ++i){
                        if(arr[i]>key){
                            arr[j] = arr[i];
                        }else{
                            break;
                        }
                    }
                }
            }
            if(tempi == i){
                sort(++i,tempj);
                return;
            }
            arr[i] = key;
            sort(tempi,tempj);
        }
        sort(i,j);
        return arr;
    },
    insertSort: function(arr){
        var arr = arr ? arr : this.array;
        var len = arr.length;
        var i,j,temp,key;
        for(i=1;i<len;i++){
            temp = j = i;
            key = arr[j];
            while(--j > -1){
                if(arr[j]>key){
                    arr[j+1] = arr[j];
                }else{
                    break;
                }
            }
            arr[j+1] = key;
        }
        return arr;
    },
    systemSort: function(arr){
        var arr = arr ? arr : this.array;
        return arr.sort(function(a,b){return a-b;});
    }
};