import { FC } from 'react'
import styled from 'styled-components'

import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'
import { convertSeconds } from '../../../utils/helpers'
import { Result } from '../../../types'
import QuizResultsChart from '../../Charts/PieChart'
import Chart2 from '../../Charts/Chart2'



const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length;
 


  const correctQuestions = result.filter((item) => item.isMatch);

  const data = {
    correct: correctQuestions.length,
    incorrect: quizDetails.totalQuestions - correctQuestions.length
  };

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed'

  const _data = {
    obtainedScore: obtainedScore,
    notObtainedScore: quizDetails.totalScore - obtainedScore
  }  

  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Score secured:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Time Spent:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p>
        Status:<HighlightedText> {calculateStatus}</HighlightedText>
      </p>
      <div className="flex items-center justify-center p-8 gap-8">
      <QuizResultsChart data={_data}/>
      <Chart2 data={data}/>
      </div>
      
    </ResultOverviewStyle>
  )
}

export default ResultOverview
