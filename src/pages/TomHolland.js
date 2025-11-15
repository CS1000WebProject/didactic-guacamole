export default function examplePage() {
    return (
      <div className='container'>
        <title>Smith's Page</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Smith Mefford. </h1>
          </div>
          <img
            className='pic'
            src='https://media.licdn.com/dms/image/v2/D5603AQHXMpJUrhuJ4A/profile-displayphoto-shrink_400_400/B56ZjzL1N.HcAo-/0/1756426622298?e=1764806400&v=beta&t=sMBNz1Kg2M7l1gqv1SW65CvpZOyz6CEKQn8IwZ4uDMs'
            alt='Smith Mefford'
          />

          <p className='description'>
            I am a freshman Computer Science & Physics double major at CU Boulder with a strong interest in game design. My career goal
            is to become a software dev, bridging the gap between advanced computing technologies and real-world applications. I bring a solid
            foundation in programming through my Oracle Java Foundations certification and additional experience in C++ development. Beyond
            academics, I have honed my problem-solving and teamwork skills through leadership roles in VEX Robotics, where I designed and
            iterated robots for competitive challenges, and by tutoring peers in SAT math strategies with Khan Academy’s Schoolhouse.world.
            My experiences also extend outside of technology: I dedicated 500+ volunteer hours at the Center for Birds of Prey, handling raptors
            and educating the public, which strengthened my communication, patience, and ability to work in unique and challenging environments. 
            As a National Merit Finalist, I am recognized among the top 1% of graduating high school students nationwide, an achievement that
            reflects my academic excellence, perseverance, and commitment to growth.I am eager to connect with professionals, researchers, and
            peers in the fields of computer science and game development.
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}