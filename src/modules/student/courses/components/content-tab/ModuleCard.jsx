"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, FileText } from "lucide-react";
import { MdOutlineQuiz } from "react-icons/md";
import { useModuleExpansion } from "../../hooks/useModuleExpansion.js";
import { BiFolder } from "react-icons/bi";

export function ModuleCard({ module }) {
    const { expandedModules, toggleModule } = useModuleExpansion();
    const [expandedFolders, setExpandedFolders] = useState(new Set());
    const [showRecordings, setShowRecordings] = useState(false);

    const isExpanded = expandedModules.has(module.id);

    const toggleFolder = (folderId) => {
        const newExpanded = new Set(expandedFolders);
        if (newExpanded.has(folderId)) {
            newExpanded.delete(folderId);
        } else {
            newExpanded.add(folderId);
        }
        setExpandedFolders(newExpanded);
    };

    const getItemIcon = (type) => {
        switch (type) {
            case "presentation":
                return <FileText className="w-7 h-7 text-[#5CA733]" />;
            case "evaluation":
                return <FileText className="w-7 h-7 text-[#5CA733]" />;
            case "quiz":
                return <MdOutlineQuiz className="w-7 h-7 text-[#5CA733]" />;
            case "task":
                return <MdOutlineQuiz className="w-7 h-7 text-[#5CA733]" />;
            case "folder":
                return <BiFolder className="w-7 h-7 text-[#5CA733]" />;
            default:
                return <FileText className="w-7 h-7 text-[#5CA733]" />;
        }
    };

    // TO REVIEW: See if the status will be in english or spanish. Now it is in spanish for example reasons
    const getStatusStyle = (status) => {
        switch (status) {
            case "Completado":
                return "text-green-600 bg-green-100";
            case "No Iniciado":
                return "text-gray-600 bg-gray-200";
            case "En Progreso":
                return "text-[#1377BD] bg-blue-100";
            default:
                return "text-gray-600 bg-gray-200";
        }
    };

    const renderModuleItem = (item, level = 0) => {
        const isFolder = item.type === "folder";
        const isFolderExpanded = expandedFolders.has(item.id);

        return (
            <div key={item.id} className={`${level > 0 ? "ml-8" : ""}`}>
                <div
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50`}
                    onClick={() => (isFolder ? toggleFolder(item.id) : undefined)}
                >
                    {getItemIcon(item.type)}
                    <div className="flex-1">
                        <div className="font-medium text-[#374159]">{item.title}</div>
                        {item.dueDate && <div className="text-sm text-gray-600">Fecha límite: {item.dueDate}</div>}
                    </div>
                    {isFolder &&
                        (isFolderExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        ))}
                </div>

                {isFolder && isFolderExpanded && item.children && (
                    <div className="mt-2">{item.children.map((child) => renderModuleItem(child, level + 1))}</div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleModule(module.id)}
            >
                <BiFolder className="w-6 h-6 text-[#1377BD]" />
                <div className="flex-1">
                    <h3 className="font-semibold text-[#374159]">{module.title}</h3>
                    <div className="flex items-center gap-4 mt-2 w-full">
                        <div className="w-2/6 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                                className="bg-[#5CA733] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${module.progress}%` }}
                            />
                        </div>
                        <span className="text-sm font-medium">{module.progress}%</span>
                        <span className={`text-sm rounded-full px-2 w-[95px] whitespace-nowrap ${getStatusStyle(module.status)}`}>
                            {module.status}
                        </span>
                    </div>
                </div>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
            </div>

            {isExpanded && (
                <div className="border-t border-gray-200 p-4 space-y-2">
                    {module.items.map((item) => renderModuleItem(item))}
                </div>
            )}
        </div>
    );
}