export const compareArr = {
     '1': (a,b)=> { return a.time - b.time} ,
     '2': (a,b)=> {return b.time - a.time },
     '3': (a,b)=>{if(a.title > b.title) return 1
                  if(a.title < b.title) return -1
                  return 0 },
     '4': (a,b)=>{
               if(a.title > b.title) return -1
               if(a.title < b.title) return  1
               return 0 },  
          
     '5': (a,b)=>{
                   if(a.domain > b.domain) return 1
                   if(a.domain < b.domain) return -1
                   return 0
               },
     '6': (a,b)=>{
                    if(a.domain > b.domain) return -1
                    if(a.domain < b.domain) return  1
                       return 0
                   }
}