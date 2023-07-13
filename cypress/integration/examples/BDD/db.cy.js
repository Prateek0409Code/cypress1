// describe("test suite",()=>{

//     it("sqlconnect", ()=>{
//       cy.postgresql("SELECT * FROM trial").should(function(result))
//        {
//               console.log(result)
//             }
//             })
          
//     })
  
  
// describe('Postgres demo', ()=>{
//   it('Connection test', ()=>{
//       cy.task("connectDB", "SELECT * FROM public.trial ").then((response)=>{
//           cy.log(response)
//           // cy.log(`Movie name: ${response[0].name}`)
//       })
//   })
// })

describe('empty spec', () => {
  it('passes', () => {
    cy.task('connectDB','SELECT NOW()').then((res)=>{
      cy.log(res[0].now);
    })
  })
})