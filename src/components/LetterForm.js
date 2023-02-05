import React from 'react'

export const LetterForm = () => {
  return (
    <div >
    <div class="header">LetterForm</div>
    <div class="container">
    <form>
      <span>받을 사람 선택</span>
      <input  class="input" type="text" name="받을 사람 선택" 
      >
      </input>
    </form>
    </div>
    
    <div class="container">
    <form>
      <span>편지 입력</span>
      <input  class="input" type="text" name="content" 
      >
      </input>
    </form>
    </div>

    <div class="container">
     <form>

      <span>받을 사람 선택</span>
      <input  class="input" type="text" name="받을 사람 선택" 
      >
      </input>
    </form>
    </div>
    </div>
  )
}
