import React, { ReactNode, FC, ReactElement } from 'react';

// TS example 


// yarn add typescript
// npm i --save-dev @types/react
// + FILE TS

// let decimal: number = 6;

export type PropTypes = {
  title?: string;
  children: ReactNode;
  onSave: (property: string) => void 
}

export const Component2: FC<PropTypes> = ({ children, title, onSave }: PropTypes ): ReactElement => (
  <>
    <div> {title} : {children} </div>
    <button onClick={()=> onSave('ff')}></button>
  </>
);
