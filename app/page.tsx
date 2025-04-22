import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [generated, setGenerated] = useState(false);

  const generateCode = () => {
    const newCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    setCode(newCode);
    setGenerated(true);
    // In production, log user info + code to Firestore here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <main className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Your YUMA Interview</h1>

        {!generated ? (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Please test your microphone and webcam before starting.</p>
              <div className="bg-gray-100 p-4 text-center rounded">[Mic/Webcam Test Placeholder]</div>
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="First and Last Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded" />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border rounded" />
              <button onClick={generateCode} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Generate Interview Code</button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-lg font-medium text-green-600">You're ready to go!</p>
            <p className="text-sm">Your interview code is:</p>
            <code className="bg-gray-100 p-2 rounded font-mono text-lg">{code}</code>
            <p className="text-sm text-gray-500">You can return anytime using the link below:</p>
            <Link href={`/interview/${code}`} className="text-blue-600 underline">
              /interview/{code}
            </Link>
            <Link href={`/interview/${code}`}>
              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Begin Interview</button>
            </Link>
          </div>
        )}
      </main>
      <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">Powered by Revaro AI</footer>
    </div>
  );
}
