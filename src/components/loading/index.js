import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./generic";
import "./styles.css";

const Example = () => (
  <Section style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'center', backgroundColor:'#fff', marginTop:30, color:'primary'}}>
    <span>لیست خودروهای شما در حال بروزرسانی است</span>
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#3f51b5" />
      </Article>
    ))}
  </Section>
);

export default Example;
