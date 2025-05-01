# n=1
# print(n)

# print(-3 // 2)
# import math
# max_value=float("-inf")
# for n in [1,2,3,99]:
#     max_value=max(max_value,n)

# print(max_value)

import math
# print(math.floor(3/2))
# print(math.pow(2,3))

# arr=[1,2,3]
# print(arr)

# arr.append(9)
# print(arr)

# arr.pop()
# print(arr)

# arr.insert(2,7)
# print(arr)

# arr[2]=5
# print(arr)

# n=5
# arr_1=[0]*5
# print(arr_1)

# print(arr[0:2])

# a,b,c=[1,2,3]
# print(a,b,c)

# for i in arr:
#     print(i)

# for i in range(len(arr)):
#     print(arr[i])

# for i,n in enumerate(arr):
#     print(i,n)

# for a1,a2 in zip(arr,arr_1):
#     print(a1,a2)


# arr=[5,3,4,8]
# arr.sort()
# print(arr)

# arr_2=["sha","mo","vaz"]
# arr_2.sort(key=lambda x:len(x))
# print(arr_2)

# arr=[i for i in range(5)]
# print(arr)

# arr=[[0]*4 for i in range(4)]
# print(arr)

# s='abc'
# print(s)
# print(s[0:1])
# print(ord(s))

# b="".join(["ab","cd"])
# print(b)

# from collections import deque

# q=deque
# q.appendleft(7)
# print(q)

# l=set()
# l.add(1)
# l.add("abc")
# print(l)
# j={i for i in range(5)}
# print(j)

#hashmaps
# dic={}
# dic["yemef"]=1
# dic["movazsha"]=2
# dic["abbas"]=3
# print(dic)

# for i in dic:
#     print(i,dic[i])

# for key, val in dic.items():
#     print(key, val)



# l=set()
# l.add(1)
# l.add("abc")
# print(l)
# j={i for i in range(5)}
# print(j)

# SETT=set()
# print(SETT)

# import heapq

# minHeap=[]
# heapq.heappush(minHeap,0)
# print(minHeap)

# arr=[3,4,2]
# heapq.heapify(arr)
# print(arr)

# #to remove max element from heap

# # convert the array values to negative and then while popping add negative back ,to get maximum
# maxHeap = []
# heapq.heappush(maxHeap, -3)
# heapq.heappush(maxHeap, -2)
# heapq.heappush(maxHeap, -4)
# print(-heapq.heappop(maxHeap))

class Human:
    def __init__(self,nums):
        self.nums=nums

    def capacity(self):
        return self.nums*50

abbas=Human(2)
print(abbas.capacity())


