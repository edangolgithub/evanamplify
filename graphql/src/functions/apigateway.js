import  { API } from 'aws-amplify';
const apiName = 'restgraphqlapi';
export const scanall = () => {
   API.get(apiName,"/items").then(res => {
     console.log(res);
   }).catch(e => {
     console.error({...e});
   });
 }
 export const getone = (key) => {
  API.get(apiName,"/items",{tableName:"restgraphqlapi",Key:key}).then(res => {
     console.log(res);
   }).catch(e => {
     console.error({...e});
   });
 }