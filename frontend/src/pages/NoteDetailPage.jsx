import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import api from "../network/api";
import { LoaderIcon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error fetching Note", error);
        toast.error("Error fetching Note.");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);
  console.log(note);
  if (loading) {
    return (
      <div className="min-h-screen bg—base—200 flex items—center justify—center">
        <LoaderIcon className="animate-spin size-10 " />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200">
      <h1>Note Page</h1>
    </div>
  );
};

export default NoteDetailPage;
