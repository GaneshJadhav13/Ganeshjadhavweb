'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function BlogPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Blog</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							No blog posts available.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}