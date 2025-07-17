function objectDestructing(arr1){
const deepCopy=JSON.parse(JSON.stringify(arr1));


    function print(arr){
        if(Array.isArray(arr)){
            for(const item of arr){
                print(item)
            }
        }
        else if(arr !==null && typeof arr==="object"){
            for(const [key,value] of Object.entries(arr)){
                if(value!==null &&  typeof value==="object"){
                    print(value)
                }
                else{
                    console.log(`${key} and value :: ${value}`)
                }
            }
        }
}
print(deepCopy)
}

let arr1 = [
  { id: 1, name: "A" },
  {
    id: 2,
    name: "B",
    type: [
      {
        data: "User",
        permissions: {
          read: true,
          write: false,
          nested: [{ level: 1, deep: { level2: "end" } }]
        }
      },
      { data: "Admin" }
    ]
  },
  {
    id: 3,
    name: "C",
    any: {
      hell: {
        deeper: {
          evenDeeper: {
            reallyDeep: "Found me!"
          }
        }
      }
    }
  },
  {
    id: 4,
    complex: [
      {
        inner: [
          {
            superInner: {
              final: [
                {
                  done: "Yes"
                }
              ]
            }
          }
        ]
      }
    ]
  }
];


objectDestructing(arr1)