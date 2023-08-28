var aryData =[
    {
       "id":1,
       "start":"2023-12-07T13:00:00",
       "subject":"Message 4",
    },
    {
       "id":2,
       "start":"2023-12-07T09:00:00",
       "subject":"Message 2",
    },
    {
       "id":3,
       "start":"2023-12-07T10:00:00",
       "subject":"Message 3",
    },
    {
       "id":4,
       "start":"2023-12-07T07:00:00",
       "subject":"Message 1",
    },
    {
       "id":5,
       "start":"2023-12-07T14:00:00",
       "subject":"Message 5",
    }
 ];
     function comp(a, b) {
         return new Date(a.start).getTime() - new Date(b.start).getTime();
     }
     aryData.sort(comp);
 
 console.log(aryData);