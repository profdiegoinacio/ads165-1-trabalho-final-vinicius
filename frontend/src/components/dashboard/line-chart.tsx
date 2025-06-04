'use client'

interface LineChartProps {
    data?: number[];
    labels?: string[];
    height?: string;
}

export default function LineChart({
                                      data = [10, 25, 15, 30, 20, 35, 45],
                                      labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                                      height = '100%'
                                  }: LineChartProps) {
    // Este é um mockup simplificado de um gráfico
    // Em uma aplicação real, você usaria uma biblioteca como Chart.js, Recharts, etc.

    const max = Math.max(...data);

    return (
        <div className="w-full h-full flex flex-col" style={{height}}>
            <div className="flex-1 flex items-end">
                {data.map((value, index) => {
                    const height = (value / max * 100);

                    return (
                        <div key={index} className="flex-1 flex flex-col items-center justify-end">
                            <div
                                className="w-full max-w-[30px] bg-blue-500 dark:bg-blue-600 rounded-t-sm mx-auto"
                                style={{height: `${height}%`}}
                            ></div>
                            <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">{labels[index]}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}