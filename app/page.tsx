'use client';

import { useState } from 'react';
import { DoublyLinkedList, Queue, RemoveGreat, InsertSort, SortQueue, ReverseLongest } from '@/lib/dataStructures';

export default function Home() {
  const [exercise1Input, setExercise1Input] = useState('12,15,10,11,5,6,2,3');
  const [exercise1Result, setExercise1Result] = useState('');

  const [exercise2aInput, setExercise2aInput] = useState('15,10,8,5');
  const [exercise2aValue, setExercise2aValue] = useState('9');
  const [exercise2aResult, setExercise2aResult] = useState('');

  const [exercise2bInput, setExercise2bInput] = useState('5,2,8,1,9,3');
  const [exercise2bResult, setExercise2bResult] = useState('');

  const [exercise3Input, setExercise3Input] = useState('4,7,9,2,3,5,1,8,10,12,7,10');
  const [exercise3Result, setExercise3Result] = useState('');
  const [exercise3Sequence, setExercise3Sequence] = useState('');

  const runExercise1 = () => {
    try {
      const numbers = exercise1Input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
      const list = new DoublyLinkedList<number>();
      list.fromArray(numbers);

      RemoveGreat(list);

      setExercise1Result(list.toArray().join(' ⇆ '));
    } catch (error) {
      setExercise1Result('Error: ' + (error as Error).message);
    }
  };

  const runExercise2a = () => {
    try {
      const numbers = exercise2aInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
      const value = parseInt(exercise2aValue);

      if (isNaN(value)) {
        setExercise2aResult('Error: Invalid value');
        return;
      }

      const queue = new Queue<number>();
      queue.fromArray(numbers);

      InsertSort(queue, value);

      setExercise2aResult(queue.toArray().join(' → '));
    } catch (error) {
      setExercise2aResult('Error: ' + (error as Error).message);
    }
  };

  const runExercise2b = () => {
    try {
      const numbers = exercise2bInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
      const queue = new Queue<number>();
      queue.fromArray(numbers);

      SortQueue(queue);

      setExercise2bResult(queue.toArray().join(' → '));
    } catch (error) {
      setExercise2bResult('Error: ' + (error as Error).message);
    }
  };

  const runExercise3 = () => {
    try {
      const numbers = exercise3Input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
      const queue = new Queue<number>();
      queue.fromArray(numbers);

      const arr = queue.toArray();
      let maxStart = 0;
      let maxLength = 1;
      let currentStart = 0;
      let currentLength = 1;

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
          currentLength++;
        } else {
          if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStart = currentStart;
          }
          currentStart = i;
          currentLength = 1;
        }
      }

      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStart = currentStart;
      }

      const sequence = arr.slice(maxStart, maxStart + maxLength).join(' → ');
      setExercise3Sequence(sequence);

      ReverseLongest(queue);

      setExercise3Result(queue.toArray().join(' → '));
    } catch (error) {
      setExercise3Result('Error: ' + (error as Error).message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Data Structures Exercises</h1>

        {/* Exercise 1 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Exercise 1: RemoveGreat</h2>
          <p className="text-gray-300 mb-4">Remove every element whose next element is greater</p>

          <div className="mb-4">
            <label className="block text-white mb-2">Input (comma-separated):</label>
            <input
              type="text"
              value={exercise1Input}
              onChange={(e) => setExercise1Input(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-400"
              placeholder="12,15,10,11,5,6,2,3"
            />
          </div>

          <button
            onClick={runExercise1}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Run
          </button>

          {exercise1Result && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded">
              <p className="text-white font-semibold">Result:</p>
              <p className="text-green-300 font-mono">{exercise1Result}</p>
            </div>
          )}
        </div>

        {/* Exercise 2a */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Exercise 2.1: InsertSort</h2>
          <p className="text-gray-300 mb-4">Insert a value into a sorted queue (descending order)</p>

          <div className="mb-4">
            <label className="block text-white mb-2">Queue (descending, comma-separated):</label>
            <input
              type="text"
              value={exercise2aInput}
              onChange={(e) => setExercise2aInput(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-400"
              placeholder="15,10,8,5"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Value to insert:</label>
            <input
              type="text"
              value={exercise2aValue}
              onChange={(e) => setExercise2aValue(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-400"
              placeholder="9"
            />
          </div>

          <button
            onClick={runExercise2a}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Run
          </button>

          {exercise2aResult && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded">
              <p className="text-white font-semibold">Result:</p>
              <p className="text-green-300 font-mono">{exercise2aResult}</p>
            </div>
          )}
        </div>

        {/* Exercise 2b */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Exercise 2.2: SortQueue</h2>
          <p className="text-gray-300 mb-4">Sort a queue in descending order. Complexity: O(n²) - insertion sort using queue operations</p>

          <div className="mb-4">
            <label className="block text-white mb-2">Queue (comma-separated):</label>
            <input
              type="text"
              value={exercise2bInput}
              onChange={(e) => setExercise2bInput(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-400"
              placeholder="5,2,8,1,9,3"
            />
          </div>

          <button
            onClick={runExercise2b}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Run
          </button>

          {exercise2bResult && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded">
              <p className="text-white font-semibold">Result:</p>
              <p className="text-green-300 font-mono">{exercise2bResult}</p>
            </div>
          )}
        </div>

        {/* Exercise 3 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Exercise 3: ReverseLongest</h2>
          <p className="text-gray-300 mb-4">Reverse the longest strictly increasing consecutive sequence</p>

          <div className="mb-4">
            <label className="block text-white mb-2">Queue (comma-separated):</label>
            <input
              type="text"
              value={exercise3Input}
              onChange={(e) => setExercise3Input(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-purple-400"
              placeholder="4,7,9,2,3,5,1,8,10,12,7,10"
            />
          </div>

          <button
            onClick={runExercise3}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded font-semibold transition-colors"
          >
            Run
          </button>

          {exercise3Sequence && (
            <div className="mt-4 p-4 bg-blue-500/20 border border-blue-500/50 rounded">
              <p className="text-white font-semibold">Longest Increasing Sequence:</p>
              <p className="text-blue-300 font-mono">{exercise3Sequence}</p>
            </div>
          )}

          {exercise3Result && (
            <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded">
              <p className="text-white font-semibold">Result:</p>
              <p className="text-green-300 font-mono">{exercise3Result}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
