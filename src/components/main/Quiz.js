import React from 'react'
import './quiz_style.css';
import { Qndata } from './Qndata';


const Quiz = () => {
    const evaluate = (e) =>{
        e.preventDefault();
        console.log(e);
        let arr=[];
        for(let i=0;i<4*Qndata.length;i+=4)
        {
            for(let j=0;j<4;j++)
            {
                if(e.target[i+j].checked)
                {
                    arr.push(i+j);
                }
            }
        }
        let an =[];
        for(let i=0;i<4*Qndata.length;i++)
        an.push(0);
        for(let i=0;i<Qndata.length;i++)
        {
            let cor=Qndata[i].ans;
            an[4*i+cor-1]=1;
        }
        console.log(an);
        console.log(arr);

        let result=0;
        let correct=[];
        for(let i=0;i<arr.length;i++)
        {
            if(an[arr[i]]==1)
            {
                result=result+1;
                correct.push(Math.floor((arr[i]+1)/4)+1);
            }
        }
        console.log(correct);
        
        alert("Your Score is :"+ result);
        for(let i=0;i<4*Qndata.length;i++)
        {
            if(an[i]==1)
            {
                document.getElementById(`${i}`).style.color="green";
            }
        }

        for(let i=0;i<arr.length;i++)
        {
            if(an[arr[i]]==0)
            {
                document.getElementById(`${arr[i]}`).style.color="red";

            }
        }

    }
  return (
    <div>
        <form onSubmit={evaluate}>
        <div className='qns'>
            
            {Qndata.map((e, ind)=>{
                return (
                    <div className='card'>
                       <p className='qnt'>{e.head}{e.qn}</p>
                       <input type="radio" name={e.radname}></input>
                       <label id = {4*ind + 0}>{e.opt1}</label>
                       <br />
                       <input type="radio" name={e.radname}></input>
                       <label id = {4*ind + 1}>{e.opt2}</label>
                       <br />
                       <input type="radio" name={e.radname}></input>
                       <label id = {4*ind + 2}>{e.opt3}</label>
                       <br />
                       <input type="radio" name={e.radname}></input>
                       <label id = {4*ind + 3}>{e.opt4}</label>
                       <br />
                    </div>

                );
            })}
        </div>
        <div className='sbmt'>
            <button id="sb" ><b>Submit</b></button>
        </div>
    </form>
    </div>
  )
}

export default Quiz