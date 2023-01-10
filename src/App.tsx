function App() {

  return (
    <div className="App h-screen bg-base-content flex justify-center items-center">
      <main className="artboard artboard-horizontal phone-5 bg-base-200 p-8 grid grid-rows-6 grid-cols-2 gap-2">
        <header className="text-lg text-bold text-primary row-start-1 row-end-2">두던두던: ADHD와 모두를 위한 투두리스트</header>
        <article className="row-start-2 row-end-7 col-span-1 bg-base-100 p-4">
          <h2>캘린더 & 루틴</h2>
        </article>
        <article className="row-start-1 row-end-7 col-span-2 bg-base-100 p-4 flex flex-col">
          <section className="bg-secondary min-h-[25%]">
            <h2>집중 영역: 지금의 할 일</h2>
          </section>
          <section className="grow">
            <h2>나중의 할 일</h2>
          </section>
          <button className="btn btn-primary btn-block">할 일 추가하기</button>
        </article>
      </main>
    </div>
  )
}

export default App
