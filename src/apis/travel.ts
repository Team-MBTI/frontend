import axios from 'axios';

import { IPostMbtiResponse, ITravelQuestion } from '@/interfaces/travel';

export const getMbtiList = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/tests`);

  try {
    if (data.status === 'ok') {
      return data.data;
    }
  } catch (err) {
    throw new Error(`getMbtiList api fail err: ${err}`);
  }
};

export const getMbtiById = async (testId: number) => {
  const { data } = await axios.get(`${process.env.API_URL}/tests/${testId}`);

  try {
    if (data.status === 'ok') {
      return data.data.questions;
    }
  } catch (err) {
    throw new Error(`getMbtiById api fail err: ${err}`);
  }
};

export const postMbti = async ({
  testId,
  answer,
}: {
  testId: number;
  answer: ITravelQuestion[];
}) => {
  try {
    const data = await axios.post(
      `${process.env.API_URL}/tests/${testId}/submit`,
      {
        testId,
        answer,
      },
    );

    if (data.status === 201) {
      return data.data;
    }
  } catch (err) {
    throw new Error(`postMbti api fail err: ${err}`);
  }
};
